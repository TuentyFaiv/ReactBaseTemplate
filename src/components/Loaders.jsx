import "@stylesComponents/Loader.scss";
import { createPortal } from "react-dom";

export const Loader = ({ msg }) => (
  <div className="loader">
    {msg}
  </div>
);

export const LoaderPage = () => {
  const root = document.querySelector("#loader-root");

  if (!root) throw new Error("There is no tag with the id \"loader-root\"");

  return createPortal(
    <div className="loader-page">
      Cargando...
    </div>,
    root
  );
};
