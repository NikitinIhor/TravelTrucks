import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import css from "./FeedbackForm.module.css";

const initialValues = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Must be a valid email!").required("Required"),
  date: Yup.date().required("Required"),
  comment: Yup.string()
    .min(3, "Too short")
    .max(256, "Too long")
    .required("Required"),
});

export default function FeedbackForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.container}>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Name*"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="text"
            name="email"
            placeholder="Email*"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={css.field}
            type="date"
            name="date"
            placeholder="Booking date*"
          />
          <ErrorMessage className={css.error} name="date" component="span" />
        </div>

        <div className={css.container}>
          <Field
            className={`${css.field} ${css.comment}`}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <ErrorMessage className={css.error} name="comment" component="span" />
        </div>

        <Button>Send</Button>
      </Form>
    </Formik>
  );
}
