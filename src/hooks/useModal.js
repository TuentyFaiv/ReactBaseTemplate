import { useEffect, useState } from "react";

export default function useModal() {
  const [modal, setModal] = useState(false);

  const toogleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const html = document.querySelector("html");
    const body = document.querySelector("body");
    if (modal) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "initial";
      body.style.overflow = "initial";
    }
  }, [modal]);

  return [modal, toogleModal];
}
