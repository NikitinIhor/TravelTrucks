import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";
import EquipmentFilter from "../Filters/EquipmentFilter/EquipmentFilter";
import TypeFilter from "../Filters/TypeFilter/TypeFilter";
import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={css.filter}>
      <label className={css.location}>
        Location
        <div className={css.input}>
          <input type="text" placeholder="Kyiv, Ukraine" />
          <svg width={20} height={20} className={css.icon_location}>
            <use href={`${sprite}#icon-location`}></use>
          </svg>
        </div>
      </label>
      <h3>Filters</h3>
      <div className={css.equipment}>
        <h3 className={css.title}>Vehicle equipment</h3>
        <EquipmentFilter />
      </div>
      <div className={css.type}>
        <h3 className={css.title}>Vehicle type</h3>
        <TypeFilter />
      </div>
      <Button>Search</Button>
    </div>
  );
}
