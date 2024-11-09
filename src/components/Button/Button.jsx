import css from "./Button.module.css";

export default function Button({ children, small }) {
  const buttonClass = small ? css.buttonSmall : css.button;

  return <button className={buttonClass}>{children}</button>;
}
