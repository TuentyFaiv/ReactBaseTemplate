import { useAppContext } from "@context";

import "@stylesPages/Home.scss";

export default function Home() {
  const [{ boot: { home: boot } }] = useAppContext();

  return (
    <div className="home">
      <h1 className="home__title">{boot}</h1>
    </div>
  );
}
