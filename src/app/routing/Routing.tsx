import * as ROUTES from 'constants/routes';
import { Dashboard, Home, NotFound, SignIn, SignUp } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
export interface RoutingProps {}

const Routing: React.SFC<RoutingProps> = () => {
	return (
		<Switch>
			<Route exact path={ROUTES.HOME}>
				<Home />
			</Route>
			<Route path={ROUTES.DASHBOARD}>
				<Dashboard />
			</Route>
			<Route path={ROUTES.SIGN_IN}>
				<SignIn />
			</Route>
			<Route path={ROUTES.SIGN_UP}>
				<SignUp />
			</Route>
			<Route path='*'>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Routing;
