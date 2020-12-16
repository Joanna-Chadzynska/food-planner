import styled, { css } from 'styled-components/macro';

export interface InnerProps {
	width?: string;
	height?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	content?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'baseline';
	align?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'baseline';
	top?: string;
}

export const Container = styled.article`
	background-image: url('https://trello-attachments.s3.amazonaws.com/5d78d22236ac1e52efe3c181/5d78d22236ac1e52efe3c1f4/500x500/6bcde9e9d7f8f1d3df331c5bcd9b2a4a/image.png');
	background-size: contain;
	min-height: calc(100vh - 250px + 100px);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (min-width: 800px) {
		margin-top: 0;
		min-height: calc(100vh - 250px);
	}
`;

export const Group = styled.div`
	display: grid;
	grid-template-rows: 1fr minmax(450px, auto);
	grid-template-columns: 1fr;
	justify-content: center;
	align-self: flex-start;
	padding: 1em;

	@media screen and (min-width: 800px) {
		padding: 1em 4em;
		align-self: center;
	}
`;

export const Inner = styled.div<InnerProps>`
	background-color: ${({ theme }) => theme.colors.backgroundScreens};
	border: 1px dashed ${({ theme }) => theme.colors.sidebarNav};
	width: ${({ width }) =>
		css`
			${width}%
		`};
	height: ${({ height }) =>
		css`
			${height}%
		`};
`;

export const Content = styled.div<InnerProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction && direction};
	justify-content: ${({ content }) => content && content};
	text-align: ${({ align }) => align && align};
	height: 100%;
	padding-top: ${({ top }) =>
		css`
			${top}%
		`};
`;
