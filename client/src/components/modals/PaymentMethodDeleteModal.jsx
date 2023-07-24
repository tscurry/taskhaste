import * as React from "react";
import { Modal, Fade, Box } from "@mui/material";

const PaymentMethodDeleteModal = props => {
  return (
    <>
      <Modal open={props.modalOpen["delete-card"]} onClose={() => props.setModalOpen(prev => ({ ...prev, "delete-card": false }))}>
        <Fade in={props.modalOpen["delete-card"]}>
          <Box className="absolute p-6 bg-white left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-lg shadow-lg">
            <p className="text-sm md:text-xl font-bold mb-5">Are you sure you want to delete this payment method?</p>
            <p className="text-xs">Once deleted this cannot be undone</p>
            <div className="flex justify-between mt-5">
              <button onClick={() => props.setModalOpen(prev => ({ ...prev, "delete-card": false }))} className='text-sm'>Cancel</button>
              <button className="text-[#ff0000] text-sm" onClick={() => props.setConfirmDelete(true)}>
                Delete
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default PaymentMethodDeleteModal;
