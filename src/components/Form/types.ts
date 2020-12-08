export interface FormProps {
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface InputProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type?:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'week';
	id?: string;
	value?: string;
	name?: string;
}

export interface SubmitProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
}
