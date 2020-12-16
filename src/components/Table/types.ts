export interface TableProps {}

export interface TableComposition {
	Title: React.FC;
	Header: React.FC;
	Body: React.FC;
	Row: React.FC;
	ColHeader: React.FC;
	ColBody: React.FC;
	Button: React.FC<ButtonProps>;
	ButtonsContainer: React.FC;
	Inner: React.FC;
}

export interface ButtonProps {
	onClick?: () => void;
}
