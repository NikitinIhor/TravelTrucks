import ReviewsList from "../ReviewsList/ReviewsList";
import SendForm from "../SendForm/SendForm";
import css from "./Reviews.module.css";

export default function Reviews() {
  return (
    <div className={css.reviews}>
      <ReviewsList />
      <SendForm />
    </div>
  );
}
