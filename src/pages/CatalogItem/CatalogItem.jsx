import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useParams } from "react-router-dom";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import sprite from "../../images/sprite.svg";
import { getCamperById } from "../../redux/galleryOps";
import {
  selectCamper,
  selectError,
  selectLoading,
} from "../../redux/gallerySlice";
import css from "./CatalogItem.module.css";

export default function CatalogItem() {
  const dispatch = useDispatch();
  const camper = useSelector(selectCamper);
  const { id } = useParams();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const newId = id.replace(":", "");

  const isActive = ({ isActive }) =>
    isActive ? `${css.isActive} ${css.link}` : css.link;

  useEffect(() => {
    dispatch(getCamperById(newId));
  }, [dispatch, newId]);

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    reviews,
    location,
    gallery = [],
    description,
    ...details
  } = camper;

  const reviewsTotal = reviews ? reviews.length : "";

  const averageRating =
    reviews && reviewsTotal > 0
      ? reviews.reduce((sum, review) => sum + review.reviewer_rating, 0) /
        reviewsTotal
      : 0;

  return (
    <div className="container">
      <div className={css.catalogItem}>
        <div className={css.header}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.price}>
            <div className={css.rewiews}>
              <svg className={css.icon_star} width={16} height={16}>
                <use href={`${sprite}#icon-star`}></use>
              </svg>
              <div className={css.underline}>
                <span className={css.averageRating}>{averageRating}</span>
                <span className={css.reviewsTotal}>
                  ({reviewsTotal}Reviews)
                </span>
              </div>
            </div>
            <div className={css.location}>
              <svg width={16} height={16} className={css.icon_location}>
                <use href={`${sprite}#icon-location`}></use>
              </svg>
              <span>{location}</span>
            </div>
          </div>
          <p className={css.p}>€{price}.00</p>
        </div>
        <ul className={css.images}>
          {gallery.map((image, index) => (
            <li key={index} className={css.image}>
              <img src={image.original} alt={`image: ${index + 1}`} />
            </li>
          ))}
        </ul>
        <p className={css.description}>{description}</p>
      </div>
      <ul className={css.links}>
        <li>
          <NavLink state={{ details }} className={isActive} to="features">
            Features
          </NavLink>
        </li>
        <li>
          <NavLink state={{ reviews }} className={isActive} to="reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}