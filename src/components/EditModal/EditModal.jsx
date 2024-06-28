import { Modal, Box, Typography } from "@mui/material";
import ContactForm from "../ContactForm/ContactForm";
import css from "./EditModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 360,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ open, handleClose, initialValues }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className={css.modalTitle}
        >
          Edit Contact
        </Typography>
        <ContactForm initialValues={initialValues} handleClose={handleClose} />
      </Box>
    </Modal>
  );
}
