import styled from 'styled-components/macro';

export interface ButtonRProps {
	action?: 'add' | 'edit' | 'delete' | 'copy' | 'pdf' | 'print';
}

export interface TableProps {
	columnsLength?: number;
}
export const Container = styled.div`
	padding: 2em 3em;
	width: 100%;
	/* display: grid;
	grid-template-rows: auto 1fr auto; */
`;

export const Header = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.txtRow_extend};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1em;
`;

export const HeaderTitle = styled.h1`
	color: ${({ theme }) => theme.colors.btn_screens};
	font-size: clamp(1.5rem, 5vw, 2.25rem);
	font-weight: 600;
	text-transform: uppercase;
`;

export const Button = styled.button<ButtonRProps>`
	border: none;
	background-color: inherit;
	cursor: pointer;

	color: ${({ action, theme }) => {
		switch (action) {
			case 'add':
				return `${theme.colors.success}`;
			case 'edit':
				return `${theme.colors.warning}`;
			case 'delete':
				return `${theme.colors.trash}`;
			default:
				return `${theme.colors.txtRow_extend}`;
		}
	}};

	transition: transform 0.3s ease-in-out;

	&:hover {
		transform: scale(1.15);
	}
`;

export const ButtonsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 0 10px;
	padding: 0.3em 0;

	${Button} svg {
		font-size: 1.75em;
	}
`;

export const Table = styled.table`
	border: none;
	width: 100%;
	/* table-layout: fixed;
	@media screen and (min-width: 800px) {
		table-layout: auto;
	} */
`;

export const TableHeader = styled.thead`
	color: ${({ theme }) => theme.colors.txtCol_header};
	font-weight: 800;
	font-size: clamp(1.4rem, 5vw, 1.8rem);
	text-transform: uppercase;
	width: 100%;
`;

export const TableHeaderCol = styled.th`
	line-height: 2.2;
	word-wrap: break-word;
	text-align: left;
	position: sticky;
	top: 0;
`;

export const TableBody = styled.tbody`
	display: block;
	overflow: auto;
	width: 100%;
	height: 550px;
`;

export const TableBodyCol = styled.td`
	padding: 1em 0.75em 1em 0;
	font-size: clamp(0.875rem, 5vw, 1rem);

	&:nth-child(3) {
	}

	&:last-of-type {
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
	}
`;

export const TableRow = styled.tr<TableProps>`
	border-top: 1px solid;
	border-bottom: 1px solid;
	border-color: ${({ theme }) => theme.colors.txtRow_extend};
	display: grid;
	width: 100%;
	grid-template-columns: ${({ columnsLength }) => {
		switch (columnsLength) {
			case 4:
				return `50px minmax(150px, 200px) minmax(200px, 1fr) 100px;`;
			case 5:
				return `50px minmax(150px, 200px) minmax(200px, 1fr) 130px 100px`;
		}
	}};

	${TableHeaderCol}:nth-child(4),${TableHeaderCol}:nth-child(5) {
		margin-left: ${({ columnsLength }) =>
			columnsLength === 5 ? '-.7em' : '-0.1em'};
	}
`;

export const TableFooter = styled.div`
	padding: 2em;
	display: flex;
	justify-content: flex-end;
`;
