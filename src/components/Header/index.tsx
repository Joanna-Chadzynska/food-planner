import React from 'react';
import {
	AnchorLink,
	Container,
	Item,
	Link,
	Navigation,
	NavigationInner,
	ToggleInput,
	ToggleLabel,
} from './styles/header';

export interface HeaderProps {}
export interface InputProps {
	type?: string;
	id?: string;
	htmlFor?: string;
}

export interface LinkProps {
	to?: any;
	href?: string;
}

export interface HeaderComposition {
	AnchorLink: React.FC<LinkProps>;
	Item: React.FC;
	Link: React.FC<LinkProps>;
	Navigation: React.FC;
	ToggleInput: React.FC<InputProps>;
	ToggleLabel: React.FC<InputProps>;
}

const Header: React.SFC<HeaderProps> & HeaderComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const HeaderNavigation: React.FC = ({ children, ...restProps }) => (
	<Navigation {...restProps}>
		<NavigationInner>{children}</NavigationInner>
	</Navigation>
);

export const HeaderItem: React.FC = ({ children, ...restProps }) => (
	<Item {...restProps}>{children}</Item>
);

export const HeaderLink: React.FC<LinkProps> = ({
	to,
	children,
	...restProps
}) => (
	<Link to={to} {...restProps}>
		{children}
	</Link>
);

export const HeaderAnchorLink: React.FC<LinkProps> = ({
	href,
	children,
	...restProps
}) => (
	<AnchorLink href={href} {...restProps}>
		{children}
	</AnchorLink>
);

export const HeaderToggleInput: React.FC<InputProps> = ({
	type,
	id,
	children,
	...restProps
}) => (
	<ToggleInput {...restProps} type={type} id={id}>
		{children}
	</ToggleInput>
);

export const HeaderToggleLabel: React.FC<InputProps> = ({
	htmlFor,
	children,
	...restProps
}) => (
	<ToggleLabel htmlFor={htmlFor} {...restProps}>
		<span></span>
	</ToggleLabel>
);

Header.AnchorLink = HeaderAnchorLink;
Header.Item = HeaderItem;
Header.Link = HeaderLink;
Header.Navigation = HeaderNavigation;
Header.ToggleInput = ToggleInput;
Header.ToggleLabel = ToggleLabel;

export default Header;
