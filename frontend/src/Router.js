import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './pages/home/Home';
import Concierge from './pages/concierge/Concierge';
import UserProfile from './pages/profile/UserProfile';
// import NotFound from './components/404/NotFound.js';

const Router = () => (
	<BrowserRouter>
		<Switch>
			{/* <Route exact path="/" component={Home} /> */}
			<Route exact path="/con" component={Concierge} />
			<Route exact path="/profile" component={UserProfile} />
			{/* <Route component={NotFound} /> */}
		</Switch>
	</BrowserRouter>
);

export default Router;
