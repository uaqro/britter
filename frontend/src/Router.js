import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Concierge from "./pages/concierge/Concierge";
// import NotFound from './components/404/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/con" component={Concierge} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;
