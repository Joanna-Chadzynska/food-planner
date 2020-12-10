import PrivateRoute from 'app/routing/PrivateRoute';
import { MainApp } from 'components';
import * as ROUTES from 'constants/routes';
import { DashboardStart, Plans, Recipes, Schedules, ShoppingList } from 'pages';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const MainAppContainer: React.SFC = () => {
	return (
		<MainApp>
			<Switch>
				<Route exact path={ROUTES.DASHBOARD}>
					<DashboardStart />
				</Route>

				<PrivateRoute exact path={ROUTES.DASHBOARD_MAIN} component={Plans} />

				<PrivateRoute
					exact
					path={ROUTES.DASHBOARD_RECIPES}
					component={Recipes}
				/>

				<PrivateRoute
					exact
					path={ROUTES.DASHBOARD_SCHEDULES}
					component={Schedules}
				/>
				<PrivateRoute
					exact
					path={ROUTES.DASHBOARD_SHOPPING_LIST}
					component={ShoppingList}
				/>
			</Switch>
		</MainApp>
	);
};

export default MainAppContainer;
