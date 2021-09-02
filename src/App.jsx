import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "@components/Layout";
import { LoaderPage } from "@components/Loaders";

const Home = lazy(() => import("@pages/Home"));

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Suspense fallback={<LoaderPage />}>
            <Route exact path="/" component={Home} />
          </Suspense>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
