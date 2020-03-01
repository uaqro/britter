import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Concierge from './pages/concierge/Concierge';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
<<<<<<< HEAD
import Goals from './pages/Goal/Goals';
=======
import UserProfile from './pages/profile/UserProfile';
>>>>>>> ed498a313cf20ba8c6b87d13c42f919638291f7a
// import {ProtectedRoute} from './pages/ProtectedRoutes';
import NotFound from './pages/404/NotFound.js';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Concierge} />
			<Route exact path="/signup" component={Signup} />
			<Route exact path="/login" component={Login} />
<<<<<<< HEAD
			<Route exact path="/goals" component={Goals} />
=======
			<Route exact path="/profile" component={UserProfile} />
>>>>>>> ed498a313cf20ba8c6b87d13c42f919638291f7a
			<Route path="*" component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
