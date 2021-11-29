import { useEffect, useState } from "react";

export default function useModal(mediaQuery = "(min-width: 0px)") {
  const [modal, setModal] = useState(false);
  const resetModal = matchMedia(mediaQuery);

  const toogleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const disableScroll = () => {
      const html = document.querySelector("html");
      const body = document.querySelector("body");
      if (modal && resetModal.matches) {
        html.style.overflow = "hidden";
        body.style.overflow = "hidden";
      } else {
        html.style.overflow = "initial";
        body.style.overflow = "initial";
      }
    };
    const listener = (event) => {
      if (modal && !event.matches) setModal(false);
      disableScroll();
    };
    resetModal.addListener(listener);

    disableScroll();

    return () => {
      resetModal.removeListener(listener);
    };
  }, [modal, resetModal]);

  return [modal, toogleModal];
}
