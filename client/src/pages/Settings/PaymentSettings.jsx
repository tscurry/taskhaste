import * as React from "react";
import { FaCcAmex, FaCcDiscover, FaCcJcb } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { PaymentMethodCardModal, PaymentMethodDeleteModal } from "../../components/modals";

import { BiLogoMastercard, BiLogoVisa } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";

const PaymentSettings = () => {
  const [modalOpen, setModalOpen] = React.useState({});
  const [paymentMethods, setPaymentMethods] = React.useState(null);
  const [methodID, setMethodID] = React.useState("");
  const [confirmDelete, setConfirmDelete] = React.useState(false);

  console.log(paymentMethods);

  const getPaymentMethods = async () => {
    try {
      const response = await fetch("http://localhost:4242/get-payment-methods");
      const data = await response.json();

      if (!data) {
        console.log("No payment method available");
      } else {
        setPaymentMethods(data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deletePaymentMethod = async methodId => {
    if (confirmDelete) {
      try {
        const response = await fetch("http://localhost:4242/delete-payment-method", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ methodId }),
        });

        const data = await response.json();

        if (data.success) {
          console.log("Payment method removed successfully");
          getPaymentMethods();
        } else console.log(data.message);
      } catch (error) {
        console.log(error);
      }
    }
  };

  React.useEffect(() => {
    getPaymentMethods();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (confirmDelete) {
      deletePaymentMethod(methodID);
      setModalOpen(prev => ({ ...prev, "delete-card": false }));
      setMethodID(null);
      setConfirmDelete(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmDelete]);

  return (
    <div className="h-full">
      <h2 className="font-bold text-lg my-[60px]">Payment</h2>
      <h2 className="mb-[50px] font-bold text-lg">Payment Methods</h2>
      {paymentMethods.length !== 0 ? (
        <>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {paymentMethods.map((method, index) => (
              <div key={index} className="relative">
                <MdOutlineDelete
                  className="absolute top-2 right-2 cursor-pointer text-white"
                  size={20}
                  onClick={() => {
                    setMethodID(method.id);
                    setModalOpen(prev => ({ ...prev, "delete-card": true }));
                  }}
                />
                <div
                  className={`${method.card.brand === "amex" ? "bg-[#0077b3] text-white" : ""} ${
                    method.card.brand === "mastercard" ? "bg-[#eb001b] text-white" : ""
                  } ${method.card.brand === "discover" ? "bg-[#f76e00] text-white" : ""} ${
                    method.card.brand === "visa" ? "bg-[#1a1f71] text-white" : ""
                  } ${
                    method.card.brand === "jcb" ? "bg-[#1a4c8f] text-white" : ""
                  } p-8 col-span-1 rounded-lg border shadow flex items-center justify-between`}
                >
                  <div>
                    <p className="mb-1 text-xs xs:text-base md:text-lg">**** **** {method.card.last4}</p>
                    <p className="text-xs md:text-sm">
                      Exp: {method.card.exp_month}/{method.card.exp_year}
                    </p>
                  </div>
                  {method.card.brand === "amex" && <FaCcAmex size={65} />}
                  {method.card.brand === "visa" && <BiLogoVisa size={65} />}
                  {method.card.brand === "mastercard" && <BiLogoMastercard size={65} />}
                  {method.card.brand === "discover" && <FaCcDiscover size={65} />}
                  {method.card.brand === "jcb" && <FaCcJcb size={65} />}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p>No payment methods available</p>
      )}
      <div className="pb-5 border-b-[2px]">
        <button className="mt-[75px] flex items-center hover:underline" onClick={() => setModalOpen(prev => ({ ...prev, "add-card": true }))}>
          <BsPlus size={35} className="mr-1" /> Add Payment Method
        </button>
      </div>
      {modalOpen["add-card"] && <PaymentMethodCardModal modalOpen={modalOpen} setModalOpen={setModalOpen} getPaymentMethods={getPaymentMethods} />}
      {modalOpen["delete-card"] && <PaymentMethodDeleteModal modalOpen={modalOpen} setModalOpen={setModalOpen} setConfirmDelete={setConfirmDelete} />}
    </div>
  );
};

export default PaymentSettings;
