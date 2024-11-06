import Filter from "../../components/Filter/Filter";
import Gallery from "../../components/Gallery/Gallery";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  return (
    <div className="container">
      <div className={css.catalogPage}>
        <Filter />
        <Gallery />
      </div>
    </div>
  );
}
