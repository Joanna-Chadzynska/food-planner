import styled from 'styled-components/macro';

export type ContainerProps = {
	bg?: 'dark' | 'gray';
};

export const Container = styled.footer<ContainerProps>`
	background-color: ${({ theme, bg }) =>
		bg === 'gray' ? theme.colors.sidebarNav : theme.colors.txtCol_header};
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Inner = styled.div`
	@media (max-width: 1000px) {
	}
`;

export const Row = styled.div`
	display: grid;
	grid-gap: 3em;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	justify-content: space-between;
	padding: 4.5em 0;
	@media (min-width: 580px) {
	}
`;

export const Column = styled.div`
	@media (min-width: 970px) {
		&:nth-of-type(2) {
			justify-self: center;
		}
		&:last-of-type {
			justify-self: end;
		}
	}
`;

export const Link = styled.a`
	display: flex;
	flex-direction: column;
	text-align: left;
`;

export const Title = styled.p`
	font-size: clamp(1.75rem, 5vw, 2rem);
	margin-bottom: 1em;
`;

export const Text = styled.p`
	line-height: 1.8;
	font-size: clamp(1rem, 5vw, 1.25rem);
`;

export const List = styled.ul`
	li {
		list-style-type: disc;
		list-style-position: inside;
		line-height: 1.8;
		font-size: clamp(1rem, 5vw, 1.25rem);
	}
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const Copyright = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: clamp(1rem, 5vw, 1.2rem);
	padding: 1em 0;
	span:last-of-type {
		color: ${({ theme }) => theme.colors.btn_screens};
	}
`;

export const Group = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 2em 0;
	max-width: 200px;
`;
