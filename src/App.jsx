import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const CatalogItem = lazy(() => import("./pages/CatalogItem/CatalogItem"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CatalogItem />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
