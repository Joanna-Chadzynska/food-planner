import { Sidebar } from 'components';
import * as ROUTES from 'constants/routes';
import * as React from 'react';

export interface SidebarContainerProps {}

const SidebarContainer: React.SFC<SidebarContainerProps> = () => {
	return (
		<Sidebar>
			<Sidebar.Group>
				<Sidebar.Link activeClassName='active' exact to={ROUTES.DASHBOARD_MAIN}>
					Pulpit
				</Sidebar.Link>

				<Sidebar.Link activeClassName='active' to={ROUTES.DASHBOARD_RECIPES}>
					Przepisy
				</Sidebar.Link>

				<Sidebar.Link activeClassName='active' to={ROUTES.DASHBOARD_SCHEDULES}>
					Plany
				</Sidebar.Link>
			</Sidebar.Group>
		</Sidebar>
	);
};

export default SidebarContainer;
