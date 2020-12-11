import PrivateRoute from 'app/routing/PrivateRoute';
import { MainApp } from 'components';
import * as ROUTES from 'constants/routes';
import { importRecipes } from 'features/recipesSlice';
import { importSchedules } from 'features/schedulesSlice';
import { importShoppingLists } from 'features/shoppingListsSlice';
import { importUser } from 'features/userSlice';
import { useHttpClient } from 'hooks';
import { DashboardStart, Plans, Recipes, Schedules, ShoppingList } from 'pages';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

const MainAppContainer: React.SFC = () => {
	const client = useHttpClient();
	const dispatch = useDispatch();

	const importDataFromAPI = async (): Promise<void> => {
		const [user, recipes, schedules, shoppingLists] = await Promise.all([
			client.getUser(),
			client.getRecipes(),
			client.getSchedules(),
			client.getShoppingLists(),
		]);

		dispatch(importUser(user));
		dispatch(importRecipes(recipes));
		dispatch(importSchedules(schedules));
		dispatch(importShoppingLists(shoppingLists));
	};

	useEffect(() => {
		if (!localStorage.getItem('user')) return;
		void importDataFromAPI();

		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

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
