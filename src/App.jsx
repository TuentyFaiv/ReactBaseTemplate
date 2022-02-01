import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAppContext } from "@context";

import Layout from "@components/Layout";
import { LoaderPage } from "@components/Loaders";

// import Home from "@pages/Home"; // Without lazy and Suspense
const Home = lazy(() => import("@pages/Home"));

export default function App() {
  const { global: { user, sessionId } } = useAppContext();

  const authenticated = !(JSON.stringify(user) === JSON.stringify({}) && sessionId === null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout auth={authenticated} />}>
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <Home />
              </Suspense>
            )}
          />
          {/* <Route index element={<Home />} /> */}
          {/* Without lazy and Suspense 👆️ */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
