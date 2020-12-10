import React from 'react';
import { Container, Group, NavItem } from './styles/sidebar';

export interface SidebarProps {}

export interface LinkProps {
	to?: any;
	activeClassName?: string;
	exact?: boolean;
}

export interface SidebarComposition {
	Link: React.FC<LinkProps>;
	Group: React.FC;
}

const Sidebar: React.SFC<SidebarProps> & SidebarComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const SidebarLink: React.FC<LinkProps> = ({
	to,
	children,
	activeClassName,
	exact = false,
	...restProps
}) => (
	<NavItem
		exact={exact}
		activeClassName={activeClassName}
		to={to}
		{...restProps}>
		{children}
	</NavItem>
);

export const SidebarGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

Sidebar.Group = SidebarGroup;
Sidebar.Link = SidebarLink;

export default Sidebar;
