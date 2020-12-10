import { MainApp } from 'components';
import * as ROUTES from 'constants/routes';
import { Plans, Recipes, Schedules } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const MainAppContainer: React.SFC = () => {
	return (
		<MainApp>
			<Switch>
				<Route exact path={ROUTES.DASHBOARD_MAIN}>
					<Plans />
				</Route>
				<Route exact path={ROUTES.DASHBOARD_RECIPES}>
					<Recipes />
				</Route>
				<Route exact path={ROUTES.DASHBOARD_SCHEDULES}>
					<Schedules />
				</Route>
			</Switch>
		</MainApp>
	);
};

export default MainAppContainer;
