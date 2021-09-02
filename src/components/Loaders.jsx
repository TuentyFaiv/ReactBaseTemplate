import "@stylesComponents/Loader.scss";

export const Loader = ({ msg }) => (
  <div className="loader">
    {msg}
  </div>
);

export const LoaderPage = () => (
  <div className="loader-page">
    Cargando...
  </div>
);
