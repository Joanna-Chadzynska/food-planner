import React from 'react';
import { Container } from './styles/sidebar';

export interface SidebarProps {}

const Sidebar: React.SFC<SidebarProps> = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export default Sidebar;
