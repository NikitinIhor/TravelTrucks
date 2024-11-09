import Details from "../Details/Details";
import SendForm from "../SendForm/SendForm";
import css from "./Features.module.css";

export default function Features() {
  return (
    <div className={css.features}>
      <Details />
      <SendForm />
    </div>
  );
}
