import { darken } from 'polished';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export interface LinkProps {
	activeClassName?: string;
}

export const Container = styled.aside`
	background-color: ${({ theme }) => theme.colors.sidebarNav};
	color: #fff;
	margin-top: clamp(60px, 10vw, 100px);

	@media screen and (min-width: 470px) {
	}
	@media screen and (min-width: 800px) {
		margin-top: 0;
		height: 100%;
	}

	z-index: 998;
`;

export const Group = styled.ul`
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;

	@media screen and (min-width: 800px) {
		justify-content: flex-start;
		flex-direction: column;
	}
`;

export const NavItem = styled(NavLink)<LinkProps>`
	display: block;
	color: #ffffff;
	font-size: clamp(1.2rem, 5vw, 1.7rem);
	padding: 1em;
	transition: background-color 0.15s ease-in-out;
	position: relative;
	width: 100%;

	&:hover {
		background-color: ${darken(0.04, '#5b605f')};

		&::after {
			content: '';
			border-style: solid;
			border-width: 0.15em 0.15em 0 0;
			border-color: ${({ theme }) => theme.colors.btn_screens};
			display: inline-block;
			height: 0.6em;
			position: absolute;
			right: 10%;
			top: 42%;
			transform: translateX(-50%) rotate(45deg);
			width: 0.6em;
		}
	}

	&.active {
		&:before {
			content: '';
			border: 3px solid ${({ theme }) => theme.colors.btn_screens};
			height: 100%;
			position: absolute;
			left: 0;
			top: 0;
		}
	}

	@media screen and (min-width: 800px) {
		padding: 1.5em 1.5em;
		&:first-of-type {
			padding-top: 1em;
		}
	}
`;
