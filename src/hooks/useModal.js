import { useCallback, useEffect, useState } from "react";

export default function useModal(mediaQuery = null) {
  const [modal, setModal] = useState(false);
  const resetModal = matchMedia(mediaQuery ?? "(min-width: 0px)");

  const toogleModal = useCallback((custom) => {
    if (typeof custom === "boolean") {
      setModal(custom);
    } else {
      setModal((prevModal) => !prevModal);
    }
  }, []);

  useEffect(() => {
    const disableScroll = (query) => {
      const html = document.querySelector("html");
      const body = document.querySelector("body");
      if (modal && query.matches) {
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
      } else {
        html.style.overflow = "";
        body.style.overflow = "";
      }
    };
    const listener = (event) => {
      if (modal && !event.matches) setModal(false);
      if (mediaQuery !== null) disableScroll(event);
    };
    resetModal.addEventListener("change", listener);

    if (mediaQuery !== null) disableScroll(resetModal);

    return () => {
      resetModal.removeEventListener("change", listener);
    };
  }, [modal, resetModal, mediaQuery]);

  return [modal, toogleModal];
}
