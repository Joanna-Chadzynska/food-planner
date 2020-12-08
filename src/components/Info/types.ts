export interface InfoProps {
	bg?: 'dark' | 'light' | 'gray';
	id?: string;
	className?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export interface InputProps {
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
}

export interface SubmitProps {
	type?: 'button' | 'submit' | 'reset' | undefined;
	disabled?: boolean;
}

export interface ButtonLinkProps {
	to?: any;
}

export interface ImageProps {
	src?: string;
	alt?: string;
}

export interface TextProps {
	align?: 'center' | 'left' | 'right' | 'justify';
}
