import React from 'react';
import {
	Button,
	ButtonsContainer,
	Container,
	Header,
	HeaderTitle,
	Table,
	TableBody,
	TableBodyCol,
	TableFooter,
	TableHeader,
	TableHeaderCol,
	TableRow,
} from './styles/list';
import { ButtonProps, ListComposition, ListProps, TableProps } from './types';

const List: React.SFC<ListProps> & ListComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const ListHeader: React.FC = ({ children, ...restProps }) => (
	<Header {...restProps}>{children}</Header>
);

export const ListHeaderTitle: React.FC = ({ children, ...restProps }) => (
	<HeaderTitle {...restProps}>{children}</HeaderTitle>
);

export const ListButton: React.FC<ButtonProps> = ({
	onClick,
	children,
	action,
	...restProps
}) => (
	<Button data-id={action} action={action} onClick={onClick} {...restProps}>
		{children}
	</Button>
);

export const ListButtonsContainer: React.FC = ({ children, ...restProps }) => (
	<ButtonsContainer {...restProps}>{children}</ButtonsContainer>
);

export const ListTable: React.FC = ({ children, ...restProps }) => (
	<Table {...restProps}>{children}</Table>
);

export const ListTableHeader: React.FC = ({ children, ...restProps }) => (
	<TableHeader {...restProps}>{children}</TableHeader>
);

export const ListTableHeaderCol: React.FC = ({ children, ...restProps }) => (
	<TableHeaderCol {...restProps}>{children}</TableHeaderCol>
);

export const ListTableBody: React.FC = ({ children, ...restProps }) => (
	<TableBody {...restProps}>{children}</TableBody>
);

export const ListTableBodyCol: React.FC = ({ children, ...restProps }) => (
	<TableBodyCol {...restProps}>{children}</TableBodyCol>
);

export const ListTableRow: React.FC<TableProps> = ({
	children,
	columnsLength,
	...restProps
}) => (
	<TableRow columnsLength={columnsLength} {...restProps}>
		{children}
	</TableRow>
);

export const ListTableFooter: React.FC = ({ children, ...restProps }) => (
	<TableFooter {...restProps}>{children}</TableFooter>
);

List.Button = ListButton;
List.ButtonsContainer = ListButtonsContainer;
List.Header = ListHeader;
List.HeaderTitle = ListHeaderTitle;
List.Table = ListTable;
List.TableBody = ListTableBody;
List.TableBodyCol = ListTableBodyCol;
List.TableFooter = ListTableFooter;
List.TableHeader = ListTableHeader;
List.TableHeaderCol = ListTableHeaderCol;
List.TableRow = ListTableRow;

export default List;
