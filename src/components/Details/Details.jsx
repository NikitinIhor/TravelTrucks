import { useLocation } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./Details.module.css";

export default function Details() {
  const { state } = useLocation();
  const details = state?.details || {};

  const optionItem = [
    { id: 1, name: "Automatic", icon: "icon-wash" },
    { id: 2, name: "AC", icon: "icon-wind" },
    { id: 3, name: "Petrol", icon: "icon-fuel-pump" },
    { id: 4, name: "Kitchen", icon: "icon-cup" },
    { id: 5, name: "Radio", icon: "icon-radio" },
  ];
  return (
    <div className={css.details}>
      <ul className={css.options}>
        {optionItem.map((el) => (
          <li key={el.id} className={css.option}>
            <svg className={css.option_icon} width={20} height={20}>
              <use href={`${sprite}#${el.icon}`}></use>
            </svg>
            <p className={css.optiion_text}>{el.name}</p>
          </li>
        ))}
      </ul>
      <div className={css.vehicle}>
        <p className={css.text}>Vehicle details</p>
        <ul className={css.list}>
          <li className={css.item}>
            <p className={css.name}>Form</p>
            <span>{details.form}</span>
          </li>
          <li className={css.item}>
            <p className={css.name}>Length</p>
            <span>{details.length}</span>
          </li>
          <li className={css.item}>
            <p className={css.name}>Width</p>
            <span>{details.width}</span>
          </li>
          <li className={css.item}>
            <p className={css.name}>Height</p>
            <span>{details.height}</span>
          </li>
          <li className={css.item}>
            <p className={css.name}>Tank</p>
            <span>{details.tank}</span>
          </li>
          <li className={css.item}>
            <p className={css.name}>Consumption</p>
            <span>{details.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
