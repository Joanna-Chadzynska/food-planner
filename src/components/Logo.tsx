import React from 'react';
import styled from 'styled-components/macro';

export const Container = styled.div`
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

const Logo: React.SFC = () => (
	<Container>
		<h1>
			<span>Zaplanuj</span>
			<span>Jedzonko</span>
		</h1>
	</Container>
);

export default Logo;
