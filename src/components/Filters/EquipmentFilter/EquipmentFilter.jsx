import sprite from "../../../images/sprite.svg";
import FilterWrapper from "../FilterWrapper/FilterWrapper";
import css from "./EquipmentFilter.module.css";

export default function EquipmentFilter() {
  const filterOptions = [
    { id: 1, name: "AC", icon: "icon-wind" },
    { id: 2, name: "Automatic", icon: "icon-wash" },
    { id: 3, name: "Kitchen", icon: "icon-cup" },
    { id: 4, name: "TV", icon: "icon-TVr" },
    { id: 5, name: "Bathroom", icon: "icon-shower" },
  ];

  return (
    <div className={css.equipmentFilter}>
      <ul className={css.list}>
        {filterOptions.map((option) => (
          <li key={option.id} className={css.item}>
            <FilterWrapper>
              <div className={css.content}>
                <svg className={css.icon} width={32} height={32}>
                  <use href={`${sprite}#${option.icon}`}></use>
                </svg>
                <p>{option.name}</p>
              </div>
            </FilterWrapper>
          </li>
        ))}
      </ul>
    </div>
  );
}
