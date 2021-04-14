import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useAppContext } from "@context";

import Layout from "@components/Layout";
import Home from "@pages/Home";

export default function App() {
  const [{ boot }] = useAppContext();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" render={(props) => <Home boot={boot} {...props} />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
