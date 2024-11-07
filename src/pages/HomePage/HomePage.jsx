import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={css.wrapper}>
        <div className="container">
          <div className={css.content}>
            <h1 className={css.title}>Campers of your dreams</h1>
            <p className={css.text}>
              You can find everything you want in our catalog
            </p>
            <Link to="/catalog">
              <Button>View Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
