import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { BsPersonFill } from "react-icons/bs";
import { HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();

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

      <button className={css.btn} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
}
