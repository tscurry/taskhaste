import * as React from "react";
import { Modal, Fade, Box } from "@mui/material";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const AddCard = props => {
  const stripe = useStripe();
  const elements = useElements();

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        fontSize: "16px",
      },
    },
  };

  const attachMethodToUser = async methodId => {
    try {
      const response = await fetch("http://localhost:4242/create-payment-method", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ methodId }),
      });

      const data = await response.json();

      if (data.success) {
        props.getPaymentMethods();
        console.log("Payment successfully attached to user: " + data.paymentMethod.id);
      } else console.log(data.error);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddPaymentMethod = async e => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const { setupIntent, error } = await stripe.confirmCardSetup(props.clientSecret, {
        payment_method: {
          card: cardElement,
        },
      });

      if (error) console.log(error.message);
      else {
        attachMethodToUser(setupIntent.payment_method);
      }
    }
    props.onSuccess();
  };

  return (
    <form onSubmit={handleAddPaymentMethod}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className="mt-7">
        <button className="hover:opacity-90 w-full px-3 py-2 bg-primary rounded text-white text-sm mb-3 disabled:bg-[#ccc]" type="submit">
          Add Payment Method
        </button>
        <button
          className="w-full px-3 py-2 rounded hover:bg-background hover:opacity-70 text-sm"
          onClick={() => props.setModalOpen(prev => ({ ...prev, "add-card": false }))}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

const PaymentMethodCardModal = props => {
  const [stripePromise, setStripePromise] = React.useState(null);
  const [clientSecret, setClientSecret] = React.useState("");

  React.useEffect(() => {
    let isMounted = true;

    const fetchConfigAndIntent = async () => {
      const keyRes = await fetch("http://localhost:4242/config");
      const { publishableKey } = await keyRes.json();

      const intentRes = await fetch("http://localhost:4242/create-setup-intent", { method: "POST", body: JSON.stringify({}) });
      const { clientSecret } = await intentRes.json();

      if (isMounted) {
        setStripePromise(loadStripe(publishableKey));
        setClientSecret(clientSecret);
      }
    };

    fetchConfigAndIntent();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {stripePromise && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }} key={clientSecret}>
          <Modal open={props.modalOpen["add-card"]} onClose={() => props.setModalOpen(prev => ({ ...prev, "add-card": false }))}>
            <Fade in={props.modalOpen["add-card"]}>
              <Box className="absolute p-6 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg shadow-lg w-full sm:w-[75%] lg:w-[40%]">
                <p className="md:text-xl font-bold mb-5">Add a credit or debit card</p>
                <AddCard
                  setModalOpen={props.setModalOpen}
                  onSuccess={() => props.setModalOpen(prev => ({ ...prev, "add-card": false }))}
                  clientSecret={clientSecret}
                  getPaymentMethods={props.getPaymentMethods}
                />
              </Box>
            </Fade>
          </Modal>
        </Elements>
      )}
    </>
  );
};

export default PaymentMethodCardModal;
