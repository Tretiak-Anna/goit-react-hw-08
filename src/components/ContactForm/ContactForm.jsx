import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact, editContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

export default function ContactForm({
  initialValues = { name: "", number: "" },
  handleClose,
}) {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    try {
      if (initialValues.id) {
        await dispatch(
          editContact({ id: initialValues.id, ...values })
        ).unwrap();
      } else {
        await dispatch(addContact(values)).unwrap();
      }
      toast.success("Successfully saved!");
      if (handleClose) handleClose();
      actions.resetForm();
    } catch (error) {
      toast.error("Error, input correct data or maybe you are  moskal");
    } finally {
      actions.setSubmitting(false);
    }
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(
        3,
        "We have such beautiful names, and that's all you remember? Write more "
      )
      .max(50, "Too long, or maybe it's a Moskal?")
      .required("Required!"),
    number: Yup.string()
      .min(7, "Ukrainian numbers have at least 7 digits, maybe it's a Moskal?")
      .max(15, "Too long or maybe it's a Moskal?")
      .required("Required!"),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.fields}>
            <label htmlFor="name">Name</label>
            <Field name="name" id="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </div>
          <div className={css.fields}>
            <label htmlFor="number">Number</label>
            <Field name="number" id="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </div>
          <button className={css.btn} type="submit" disabled={isSubmitting}>
            {initialValues.id ? "Save changes" : "Add contact"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
