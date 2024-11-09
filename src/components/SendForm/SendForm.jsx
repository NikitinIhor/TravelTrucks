import FeedbackForm from "../FeedbackForm/FeedbackForm";
import css from "./SendForm.module.css";

export default function SendForm() {
  return (
    <div className={css.sendForm}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>

      <FeedbackForm />
    </div>
  );
}
