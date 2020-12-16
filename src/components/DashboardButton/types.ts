export interface ButtonProps {
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DashboardButtonProps extends ButtonProps {
	id?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	color?: 'success' | 'info' | 'warning' | 'error';
}

export interface TextProps {
	color?: 'success' | 'info' | 'warning' | 'error';
}

export interface GroupProps {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export interface DashboardButtonComposition {
	Close: React.FC<ButtonProps>;
	Group: React.FC<GroupProps>;
	GroupWrapper: React.FC;
	Icon: React.FC;
	Text: React.FC<TextProps>;
}
