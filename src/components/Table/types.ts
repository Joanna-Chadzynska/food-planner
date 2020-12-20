export interface TableProps {}

export interface TableComposition {
	Title: React.FC;
	Header: React.FC;
	Body: React.FC;
	Row: React.FC<RowProps>;
	ColHeader: React.FC<ColProps>;
	ColBody: React.FC<ColProps>;
	Button: React.FC<ButtonProps>;
	ButtonsContainer: React.FC;
	Inner: React.FC;
}

export interface ButtonProps {
	onClick?: () => void;
}

export interface RowProps {
	dataIdRow?: string;
}
export interface ColProps {
	dataIdCol?: string;
	dataIdRow?: string;
	scope?: 'col' | 'row';
}
