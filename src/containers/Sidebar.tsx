import { Sidebar } from 'components';
import * as React from 'react';

export interface SidebarContainerProps {}

const SidebarContainer: React.SFC<SidebarContainerProps> = () => {
	return <Sidebar>sidebar nav</Sidebar>;
};

export default SidebarContainer;
