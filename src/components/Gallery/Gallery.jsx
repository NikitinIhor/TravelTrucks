import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGallery } from "../../redux/galleryOps";
import { selectGallery, selectTotalItems } from "../../redux/gallerySlice";
import GalleryItem from "../GalleryItem/GalleryItem";
import css from "./Gallery.module.css";

export default function Gallery() {
  const dispatch = useDispatch();
  const campers = useSelector(selectGallery);
  const totalItems = useSelector(selectTotalItems);

  const [page, setPage] = useState(1);

  const perPage = 4;

  const totalCampers = campers.length < totalItems;

  useEffect(() => {
    dispatch(getAllGallery({ page, perPage }));
  }, [dispatch, page, perPage]);

  const loadMore = () => {
    if (totalCampers) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  if (!campers || campers.length === 0) {
    return <div className={css.noCampers}>-- No campers found --</div>;
  }

  return (
    <div className={css.gallery}>
      <ul className={css.list}>
        {campers.map((camper) => (
          <GalleryItem key={camper.id} data={camper} />
        ))}
      </ul>
      {totalCampers && (
        <button onClick={loadMore} className={css.more}>
          Load more
        </button>
      )}
    </div>
  );
}
