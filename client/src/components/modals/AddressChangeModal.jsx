import * as React from "react";
import { Modal, Fade, Box } from "@mui/material";
import PlacesAutocomplete from "../PlacesAutocomplete";

const AddressChangeModal = props => {
  const [tempAddress, setTempAddress] = React.useState("");

  const saveAddress = () => {
    props.settingsSetAddress(prev => ({ ...prev, address: tempAddress }));
    props.setModalOpen(prev => ({ ...prev, address: false }));
  };

  return (
    <>
      <Modal open={props.modalOpen["address"]} onClose={() => props.setModalOpen(prev => ({ ...prev, address: false }))}>
        <Fade in={props.modalOpen["address"]}>
          <Box className="absolute p-6 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg shadow-lg">
            <p className="md:text-xl font-bold mb-5">Change your address</p>
            <PlacesAutocomplete page="settings" settingsSetAddress={setTempAddress} />
            <div className="mt-10 w-full">
              <button type="submit" className="text-sm bg-primary text-white p-2 rounded disabled:bg-[#ccc] w-full" onClick={saveAddress}>
                Save Changes
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default AddressChangeModal;
