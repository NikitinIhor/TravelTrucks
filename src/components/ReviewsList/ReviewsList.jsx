import { useLocation } from "react-router-dom";
import sprite from "../../images/sprite.svg";
import css from "./ReviewsList.module.css";

export default function ReviewsList() {
  const { state } = useLocation();
  const reviews = state?.reviews || [];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={index < rating ? css.icon_star_fill : css.icon_star_empty}
        width={16}
        height={16}
      >
        <use href={`${sprite}#icon-star`}></use>
      </svg>
    ));
  };

  return (
    <div className={css.eviewsList}>
      <ul className={css.items}>
        {reviews.map((review, index) => (
          <li className={css.item} key={index}>
            <div className={css.info}>
              <div className={css.logo}>
                <span>{review.reviewer_name.slice(0, 1)}</span>
              </div>
              <div className={css.content}>
                <p>{review.reviewer_name}</p>
                <div className={css.rating}>
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className={css.text}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
