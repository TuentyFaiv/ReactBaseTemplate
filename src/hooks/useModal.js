import { useCallback, useEffect, useState } from "react";

export default function useModal(mediaQuery = "(min-width: 0px)") {
  const [modal, setModal] = useState(false);
  const resetModal = matchMedia(mediaQuery);

  const toogleModal = useCallback((custom) => {
    if (typeof custom !== "undefined" && typeof custom === "boolean") {
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
        html.style.overflow = "initial";
        body.style.overflow = "initial";
      }
    };
    const listener = (event) => {
      if (modal && !event.matches) setModal(false);
      disableScroll(event);
    };
    resetModal.addListener(listener);

    disableScroll(resetModal);

    return () => {
      resetModal.removeListener(listener);
    };
  }, [modal, resetModal]);

  return [modal, toogleModal];
}
