import css from "./FilterWrapper.module.css";

export default function FilterWrapper({ children }) {
  return (
    <div className={css.filterWrapper} tabIndex="0">
      {children}
    </div>
  );
}
