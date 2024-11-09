import css from "./Loader.module.css";

import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loader}>
      <TailSpin
        visible={true}
        height="120"
        width="120"
        color="blue"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
