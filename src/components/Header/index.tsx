import React from 'react';
import {
	AnchorLink,
	Button,
	Container,
	Dropdown,
	Group,
	Inner,
	Item,
	Link,
	Name,
	Navigation,
	NavigationInner,
	Picture,
	Profile,
	ToggleInput,
	ToggleLabel,
} from './styles/header';
import { ButtonProps, HeaderProps, InputProps, LinkProps } from './types';

export interface HeaderComposition {
	AnchorLink: React.FC<LinkProps>;
	Button: React.FC<ButtonProps>;
	Dropdown: React.FC;
	Group: React.FC;
	Item: React.FC;
	Name: React.FC;
	Profile: React.FC;
	Picture: React.FC;
	Link: React.FC<LinkProps>;
	Navigation: React.FC;
	ToggleInput: React.FC<InputProps>;
	ToggleLabel: React.FC<InputProps>;
}

const Header: React.SFC<HeaderProps> & HeaderComposition = ({
	children,
	className,
	...restProps
}) => {
	return (
		<Container {...restProps}>
			<Inner className={className}>{children}</Inner>
		</Container>
	);
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

export const HeaderDropdown: React.FC = ({ children, ...restProps }) => (
	<Dropdown {...restProps}>{children}</Dropdown>
);

export const HeaderGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

export const HeaderProfile: React.FC = ({ children, ...restProps }) => (
	<Profile {...restProps}>{children}</Profile>
);

export const HeaderName: React.FC = ({ children, ...restProps }) => (
	<Name {...restProps}>{children}</Name>
);

export const HeaderPicture: React.FC = ({ children, ...restProps }) => (
	<Picture {...restProps}>{children}</Picture>
);

export const HeaderButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	...restProps
}) => (
	<Button onClick={onClick} {...restProps}>
		{children}
	</Button>
);

Header.AnchorLink = HeaderAnchorLink;
Header.Button = HeaderButton;
Header.Dropdown = HeaderDropdown;
Header.Group = HeaderGroup;
Header.Item = HeaderItem;
Header.Link = HeaderLink;
Header.Navigation = HeaderNavigation;
Header.ToggleInput = ToggleInput;
Header.ToggleLabel = ToggleLabel;
Header.Profile = HeaderProfile;
Header.Picture = HeaderPicture;
Header.Name = HeaderName;

export default Header;
