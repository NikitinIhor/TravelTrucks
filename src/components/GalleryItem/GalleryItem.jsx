import sprite from "../../images/sprite.svg";
import css from "./GalleryItem.module.css";

export default function GalleryItem({ data: { name, gallery, price } }) {
  const originalImage = gallery[0].original;

  return (
    <li className={css.item}>
      <div className={css.wrapper}>
        <div className={css.image}>
          <img src={originalImage} alt={`image of ${name}`} />
        </div>
        <div className={css.content}>
          <div className={css.header}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.price}>
              <p className={css.p}>{price}</p>
              <svg className={css.icon} width={24} height={24}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
