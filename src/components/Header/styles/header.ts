import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Container = styled.header`
	background-color: ${({ theme }) => theme.colors.txtCol_header};
	position: fixed;
	top: 0;
	text-align: center;
	width: 100%;
	z-index: 999;

	@media screen and (min-width: 800px) {
		display: flex;
		justify-content: space-around;
		align-items: center;
		position: relative;
	}
`;

export const NavigationInner = styled.ul`
	@media screen and (min-width: 800px) {
		display: flex;
		align-items: center;
	}
`;

export const Navigation = styled.nav`
	background-color: ${({ theme }) => theme.colors.txtCol_header};
	width: 100%;
	transform-origin: top;
	transform: scale(1, 0);
	transition: transform 400ms ease-in-out;
	position: absolute;
	text-align: left;
	top: 100%;
	left: 0;

	@media screen and (min-width: 800px) {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
`;

export const Item = styled.li`
	margin: 1em 0 1em 1em;

	@media screen and (min-width: 800px) {
		margin: 0 0 0 3em;
	}
`;

export const Link = styled(NavLink)`
	color: #ffffff;
`;

export const AnchorLink = styled.a`
	color: #ffffff;
	font-size: 1.2rem;
	text-transform: uppercase;
	transition: color 0.15s ease-in-out, opacity 0.15s ease-in-out;
	opacity: 0;

	&:hover {
		color: ${({ theme }) => theme.colors.btn_screens};
	}

	@media screen and (min-width: 800px) {
		opacity: 1;
		position: relative;
	}
`;

export const ToggleLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	margin-left: 1em;
	height: 100%;
	display: flex;
	align-items: center;

	span,
	span::before,
	span::after {
		display: block;
		background-color: #ffffff;
		height: 2px;
		width: 2em;
		border-radius: 2px;
		position: relative;
		transition: transform 220ms ease-in-out;
	}

	span::before,
	span::after {
		content: '';
		position: absolute;
	}

	span::before {
		top: -10px;
		transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	span::after {
		bottom: -10px;
		transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
	}

	@media screen and (min-width: 800px) {
		display: none;
	}
`;

export const ToggleInput = styled.input`
	position: absolute !important;
	top: -9999px !important;
	left: -9999px !important;

	&:focus ~ ${ToggleLabel} {
		outline: 3px solid rgba(lightblue, 0.75);
	}

	&:checked ~ ${ToggleLabel} {
		span {
			transform: rotate(225deg);
			transition: transform 220ms 120ms ease-in-out;
		}
		span::before {
			top: 0;
			transition: top 100ms ease-out;
		}
		span::after {
			bottom: 0;
			transform: rotate(-90deg);
			transition: bottom 100ms ease-out, transform 220ms 120ms ease-in-out;
		}
	}

	&:checked ~ ${Navigation} {
		transform: scale(1, 1);
	}

	&:checked ~ ${Navigation} ${AnchorLink} {
		opacity: 1;
		transition: opacity 250ms ease-in-out 250ms;
	}
`;
