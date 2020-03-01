import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concierge from './pages/concierge/Concierge';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Goals from './pages/Goal/Goals';
import UserProfile from './pages/profile/UserProfile';
// import {ProtectedRoute} from './pages/ProtectedRoutes';
import NotFound from './pages/404/NotFound.js';
import Logo from './components/Logo/Logo';
import Navbar from './components/Nav/Nav';
const Router = () => (
	<BrowserRouter>
	<Navbar/>
		<Logo/>
		<Switch>
			<Route exact path="/" component={Concierge} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/goals" component={Goals} />
			<Route exact path="/profile" component={UserProfile} />
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
