import css from "./Error.module.css";

export default function Error() {
  return (
    <div className={css.error}>
      <p className={css.text}>
        Ooops... something went wrong, please, reload the page
      </p>
      ;
    </div>
  );
}
