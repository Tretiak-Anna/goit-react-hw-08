import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const fieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required!"),
    number: Yup.string()
      .min(7, "Minimum 7 digits!")
      .max(9, "Too long!")
      .required("Required!"),
  });
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.fields}>
          <label htmlFor={`name-${fieldId}`}>Name</label>
          <Field name="name" id={`name-${fieldId}`} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div className={css.fields}>
          <label htmlFor={`number-${fieldId}`}>Number</label>
          <Field name="number" id={`number-${fieldId}`} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
