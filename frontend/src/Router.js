import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concierge from './pages/concierge/Concierge';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
// import {ProtectedRoute} from './pages/ProtectedRoutes';
import NotFound from './pages/404/NotFound.js';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Concierge} />
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/login" component={Login}/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </BrowserRouter>
);

export default Router;
