import styled from 'styled-components/macro';

export const Container = styled.div`
	border: 1px dashed ${({ theme }) => theme.colors.txtRow_extend};
	background-color: ${({ theme }) => theme.colors.backgroundScreens};
	position: relative;
	display: grid;
	grid-template-rows: auto auto;
	padding: 1em;
	padding-bottom: 1em;
	overflow: auto;

	@media screen and (min-width: 800px) {
		height: 95%;
	}
`;

export const Inner = styled.table`
	border: none;
	border-collapse: collapse;
	width: 100%;
	table-layout: auto;

	@media screen and (min-width) {
		overflow: auto;
		table-layout: fixed;
	}
`;

export const Title = styled.caption`
	color: ${({ theme }) => theme.colors.btn_screens};
	font-weight: 600;
	font-size: clamp(1.25rem, 5vw, 1.65rem);
	margin-bottom: 1em;
`;

export const Header = styled.thead`
	@media screen and (max-width: 799px) {
		border: none;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
`;

export const Body = styled.tbody``;

export const Row = styled.tr`
	border-top: 1px solid;
	border-bottom: 1px solid;
	border-color: ${({ theme }) => theme.colors.txtRow_extend};
	line-height: 2.2;
`;

export const ColHeader = styled.th`
	color: ${({ theme }) => theme.colors.txtCol_header};
	font-weight: 800;
	font-size: clamp(1.25rem, 5vw, 1.45rem);
	line-height: 2.2;
	word-wrap: break-word;
	text-align: left;
	padding-right: 0.75em;
`;

export const ColBody = styled.td`
	color: ${({ theme }) => theme.colors.txtRow_extend};
	font-size: clamp(1.15rem, 5vw, 1.35rem);
	word-wrap: break-word;
	text-align: left;
	vertical-align: center;
	padding-right: 0.75em;

	@media screen and (max-width: 799px) {
		border-bottom: 1px solid #ddd;
		display: block;
		font-size: inherit;
		text-align: right;
		&::before {
			content: attr(data-label);
			float: left;
			font-weight: bold;
			text-transform: uppercase;
		}
	}
`;

export const Button = styled.button`
	border: none;
	background-color: inherit;
	color: ${({ theme }) => theme.colors.btn_screens};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1em;
	svg {
		color: ${({ theme }) => theme.colors.btn_screens};
		font-size: 1.65em;
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const Group = styled.div``;

export const Icon = styled.div``;

export const Text = styled.p``;

export const Select = styled.select``;

export const Option = styled.option``;
