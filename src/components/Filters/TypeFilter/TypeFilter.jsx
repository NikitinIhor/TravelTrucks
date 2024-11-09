import sprite from "../../../images/sprite.svg";
import css from "../EquipmentFilter/EquipmentFilter.module.css";
import FilterWrapper from "../FilterWrapper/FilterWrapper";

export default function TypeFilter() {
  const filterOptions = [
    { id: 1, name: "Van", icon: "icon-gridsvg" },
    { id: 2, name: "Fully Integrated", icon: "icon-grid2" },
    { id: 3, name: "Alcove", icon: "icon-grid3" },
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
