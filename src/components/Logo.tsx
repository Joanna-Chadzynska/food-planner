import * as ROUTES from 'constants/routes';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

export interface LogoProps {
	to?: any;
}

export const Container = styled(Link)`
	display: block;
	background-color: inherit;
	padding: 0.5em;
	h1 {
		font-family: ${({ theme }) => theme.fonts.family.charmonman};
		font-size: clamp(1.75rem, 5vw, 2.5rem);

		span:first-child {
			color: #ffffff;
			font-weight: 100;
		}
		span:last-child {
			color: #e58a20;
			font-weight: 700;
		}
	}
`;

export interface LogoProps {}

const Logo: React.SFC<LogoProps> = ({ to, ...restProps }) => (
	<Container to={ROUTES.HOME} {...restProps}>
		<h1>
			<span>Zaplanuj</span>
			<span>Jedzonko</span>
		</h1>
	</Container>
);

export default Logo;
