export interface AddEditFormProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface FieldsetProps {
	hasButton?: boolean;
}

export interface InputProps {
	type: 'text' | 'date' | 'number';
	value: any;
	name?: string;
	placeholder?: string;
	id?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	width?: string;
}

export interface TextareaProps {
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	id?: string;
	name?: string;
	minLength?: number | undefined;
	maxLength?: number | undefined;
	value: any;
	width?: string;
}

export interface LabelProps {
	htmlFor?: string;
}

export interface ButtonProps {
	onClick?: () => void;
}

export interface TextareaProps {}

export interface AddEditFormComposition {
	Header: React.FC;
	Fieldset: React.FC<FieldsetProps>;
	Input: React.FC<InputProps>;
	Textarea: React.FC<TextareaProps>;
	Label: React.FC<LabelProps>;
	Group: React.FC;
	GroupWrapper: React.FC;
	Subtitle: React.FC;
	Button: React.FC<ButtonProps>;
	OrderedList: React.FC;
	UnorderedList: React.FC;
	Error: React.FC;
}
