import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@components/Layout";
import { LoaderPage } from "@components/Loaders";

const Home = lazy(() => import("@pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={(
              <Suspense fallback={<LoaderPage />}>
                <Home />
              </Suspense>
            )}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
