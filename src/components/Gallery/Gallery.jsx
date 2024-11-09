import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGallery } from "../../redux/galleryOps";
import {
  selectError,
  selectGallery,
  selectLoading,
  selectTotalItems,
} from "../../redux/gallerySlice";
import Error from "../Error/Error";
import GalleryItem from "../GalleryItem/GalleryItem";
import Loader from "../Loader/Loader";
import css from "./Gallery.module.css";

export default function Gallery() {
  const dispatch = useDispatch();
  const campers = useSelector(selectGallery);
  const totalItems = useSelector(selectTotalItems);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

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

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  if (campers.length === 0) {
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
