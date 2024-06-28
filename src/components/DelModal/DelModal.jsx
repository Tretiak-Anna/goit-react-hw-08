import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DelModal({ open, close, handleDelete, contactName }) {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Delete Contact -Its really Moskal?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          I never liked {contactName}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>No</Button>
        <Button onClick={handleDelete} autoFocus>
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}
