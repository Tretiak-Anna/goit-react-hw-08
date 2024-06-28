import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteContact } from "../../redux/contacts/operations";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditModal from "../EditModal/EditModal";
import css from "./Contact.module.css";
import DelModal from "../DelModal/DelModal";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false);
  const [delModalOpen, setDelModalOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleDeleteClick = () => {
    setDelModalOpen(true);
  };

  return (
    <div className={css.container}>
      <div>
        <p>
          <BsPersonFill className={css.myIcon} size="20" />
          {name}
        </p>
        <p>
          <HiPhone className={css.myIcon} size="20" />
          {number}
        </p>
      </div>
      <Stack direction="row">
        <IconButton aria-label="edit" onClick={handleEditClick}>
          <EditIcon className={css.myIcon} />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleDeleteClick}>
          <DeleteIcon className={css.myIcon} />
        </IconButton>
      </Stack>
      <EditModal
        open={isModalOpen}
        handleClose={() => setModalOpen(false)}
        initialValues={{ id, name, number }}
      />
      <DelModal
        open={delModalOpen}
        close={() => setDelModalOpen(false)}
        handleDelete={() => {
          dispatch(deleteContact(id));
        }}
        contactName={name}
      />
    </div>
  );
}
