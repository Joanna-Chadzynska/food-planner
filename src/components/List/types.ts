export interface ListProps {}
export interface ListComposition {
	Header: React.FC;
	HeaderTitle: React.FC;
	Button: React.FC<ButtonProps>;
	ButtonsContainer: React.FC;
	Table: React.FC;
	TableHeader: React.FC;
	TableHeaderCol: React.FC;
	TableBody: React.FC;
	TableBodyCol: React.FC;
	TableRow: React.FC<TableProps>;
	TableFooter: React.FC;
}

export interface ButtonProps {
	onClick?: () => void;
	action?: 'add' | 'edit' | 'delete' | 'copy' | 'pdf' | 'print';
}

export interface TableProps {
	columnsLength?: number;
}
