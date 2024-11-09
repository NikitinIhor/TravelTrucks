import { Link } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import Button from "../Button/Button";
import css from "./GalleryItem.module.css";

export default function GalleryItem({
  data: { id, name, gallery, price, reviews, location, description },
}) {
  const originalImage = gallery[0].original;
  const reviewsTotal = reviews.length;
  const averageRating =
    reviews.reduce((sum, reviev) => sum + reviev.reviewer_rating, 0) /
    reviewsTotal;

  const optionItem = [
    { id: 1, name: "Automatic", icon: "icon-wash" },
    { id: 2, name: "Petrol", icon: "icon-fuel-pump" },
    { id: 3, name: "Kitchen", icon: "icon-cup" },
    { id: 4, name: "AC", icon: "icon-wind" },
  ];

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
              <p className={css.p}>€{price}.00</p>
              <svg className={css.icon_heart} width={24} height={24}>
                <use href={`${sprite}#icon-heart`}></use>
              </svg>
            </div>
          </div>
          <div className={css.info}>
            <div className={css.reviews}>
              <svg className={css.icon_star} width={16} height={16}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              <span className={css.averageRating}>{averageRating}</span>
              <span className={css.reviewsTotal}>({reviewsTotal}Reviews)</span>
              <div className={css.location}>
                <svg width={16} height={16} className={css.icon_location}>
                  <use href={`${sprite}#icon-location`}></use>
                </svg>
                <span>{location}</span>
              </div>
            </div>
            <div className={css.description}>{description}</div>
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
            <Link to={`/catalog/:${id}`}>
              <Button small>Show more</Button>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
