import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGallery } from "../../redux/galleryOps";
import { selectGallery } from "../../redux/gallerySlice";
import GalleryItem from "../GalleryItem/GalleryItem";
import css from "./Gallery.module.css";

export default function Gallery() {
  const dispatch = useDispatch();
  const campers = useSelector(selectGallery);

  useEffect(() => {
    dispatch(getAllGallery());
  }, [dispatch]);

  if (!campers || campers.length === 0) {
    return <div>No campers found.</div>;
  }

  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <GalleryItem key={camper.id} data={camper} />
        ))}
      </ul>
    </div>
  );
}
