<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Concierge from "./pages/concierge/Concierge";
import Goals from "./pages/Goal/Goals";
// import NotFound from './components/404/NotFound.js';
=======
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concierge from './pages/concierge/Concierge';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// import {ProtectedRoute} from './pages/ProtectedRoutes';
import NotFound from './pages/404/NotFound.js';
>>>>>>> 08b85ce6536f8e1c0e41fcd7c576736dcb0c5c93

const Router = () => (
  <BrowserRouter>
    <Switch>
<<<<<<< HEAD
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/con" component={Concierge} />
      <Route exact path="/goals" component={Goals} />
      {/* <Route component={NotFound} /> */}
=======
      <Route exact path='/' component={Concierge} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route path='*' component={NotFound}/>
>>>>>>> 08b85ce6536f8e1c0e41fcd7c576736dcb0c5c93
    </Switch>
  </BrowserRouter>
);

export default Router;
