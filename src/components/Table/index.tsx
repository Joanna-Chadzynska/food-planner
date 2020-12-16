import React from 'react';
import {
	Body,
	Button,
	ButtonsContainer,
	ColBody,
	ColHeader,
	Container,
	Header,
	Inner,
	Row,
	Title,
} from './styles/table';
import { ButtonProps, TableComposition, TableProps } from './types';

const Table: React.SFC<TableProps> & TableComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const TableInner: React.FC = ({ children, ...restProps }) => (
	<Inner {...restProps}>{children}</Inner>
);

export const TableTitle: React.FC = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

export const TableHeader: React.FC = ({ children, ...restProps }) => (
	<Header {...restProps}>{children}</Header>
);

export const TableBody: React.FC = ({ children, ...restProps }) => (
	<Body {...restProps}>{children}</Body>
);

export const TableRow: React.FC = ({ children, ...restProps }) => (
	<Row {...restProps}>{children}</Row>
);

export const TableColHeader: React.FC = ({ children, ...restProps }) => (
	<ColHeader {...restProps}>{children}</ColHeader>
);

export const TableColBody: React.FC = ({ children, ...restProps }) => (
	<ColBody {...restProps}>{children}</ColBody>
);

export const TableButton: React.FC<ButtonProps> = ({
	onClick,
	children,
	...restProps
}) => (
	<Button onClick={onClick} {...restProps}>
		{children}
	</Button>
);

export const TableButtonsContainer: React.FC = ({ children, ...restProps }) => (
	<ButtonsContainer {...restProps}>{children}</ButtonsContainer>
);

Table.Body = TableBody;
Table.Button = TableButton;
Table.ButtonsContainer = TableButtonsContainer;
Table.ColBody = TableColBody;
Table.ColHeader = TableColHeader;
Table.Header = TableHeader;
Table.Inner = TableInner;
Table.Row = TableRow;
Table.Title = TableTitle;

export default Table;
