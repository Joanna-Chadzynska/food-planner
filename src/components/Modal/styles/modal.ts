import styled from 'styled-components/macro';

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	z-index: 5000;
`;

export const Inner = styled.div`
	background-color: ${({ theme }) => theme.colors.backgroundScreens};
	border: 1px dashed ${({ theme }) => theme.colors.sidebarNav};
	width: 90%;
	height: 90%;
	margin: auto;
	padding: 1em 3em;
	position: relative;

	@media screen and (min-width: 800px) {
		padding: 2.5em 5em;
	}
`;

export const Close = styled.button`
	border: none;
	background-color: inherit;
	position: absolute;
	top: 1em;
	right: 1em;

	svg {
		color: ${({ theme }) => theme.colors.success};
		font-size: 2em;
	}
`;
