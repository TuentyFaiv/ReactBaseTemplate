import { Outlet } from "react-router-dom";

import "@stylesComponents/Layout.scss";

import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="layout">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
