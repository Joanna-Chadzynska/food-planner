import * as ROUTES from 'constants/routes';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export interface PrivateRouteProps {
	component: any;
	exact?: boolean;
	path: any;
}

const PrivateRoute: React.SFC<PrivateRouteProps> = ({
	component: Component,
	...restProps
}) => {
	return (
		<Route
			{...restProps}
			render={(props) =>
				localStorage.getItem('user')?.length ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: ROUTES.DASHBOARD,
							state: {
								from: props.location,
							},
						}}
					/>
				)
			}
		/>
	);
};

export default PrivateRoute;
