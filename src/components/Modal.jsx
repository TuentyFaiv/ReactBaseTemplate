import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { useDatas } from "@hooks";

import "@stylesComponents/Modal.scss";

// import CloseIcon from "@icons/icon-close-modal.svg";

const DEFAULT_CONFIG = {
  small: false,
  white: false,
  center: false,
  close: false,
  scroll: false,
  header: true
};

export default function Modal({ children, title = "", config = DEFAULT_CONFIG, open, onClose }) {
  const root = document.querySelector("#modal-root");
  const { t } = useTranslation("modal", { useSuspense: false });
  const datas = useDatas(config);

  if (!root) throw new Error("There is no tag with the id \"modal-root\"");
  if (!open) return null;

  return createPortal(
    <section
      className="modal"
      data-hastitle={Boolean(title)}
      {...datas}
    >
      <div className="modal__container">
        {config.header ? (
          <div className="modal__header">
            {title ? (
              <h2 className="modal__title">{title}</h2>
            ) : (
              "logo"
            )}
          </div>
        ) : null}
        <div className="modal__content">
          {children(config)}
        </div>
        <button type="button" className="modal__button" onClick={onClose}>
          {!config.close ? (<span>{t("modal-accept")}</span>) : "CloseIcon"}
        </button>
      </div>
    </section>,
    root
  );
}
