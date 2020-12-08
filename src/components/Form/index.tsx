import { SubmitProps } from 'components/Info/types';
import React from 'react';
import {
	Base,
	Container,
	Fieldset,
	Group,
	Input,
	Label,
	Submit,
} from './styles/form';
import { FormProps, InputProps } from './types';

export interface FormComposition {
	Base: React.FC<FormProps>;
	Fieldset: React.FC;
	Input: React.FC<InputProps>;
	Label: React.FC;
	Submit: React.FC<SubmitProps>;
	Group: React.FC;
}

const Form: React.SFC & FormComposition = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export const FormBase: React.FC<FormProps> = ({
	onSubmit,
	children,
	...restProps
}) => (
	<Base onSubmit={onSubmit} {...restProps}>
		{children}
	</Base>
);

export const FormFieldset: React.FC = ({ children, ...restProps }) => (
	<Fieldset {...restProps}>{children}</Fieldset>
);

export const FormInput: React.FC<InputProps> = ({
	type,
	children,
	name,
	value,
	id,
	onChange,
	...restProps
}) => (
	<Input
		onChange={onChange}
		type={type}
		name={name}
		value={value}
		id={id}
		{...restProps}>
		{children}
	</Input>
);

export const FormSubmit: React.FC<SubmitProps> = ({
	children,
	type,
	...restProps
}) => (
	<Submit type={type} {...restProps}>
		{children}
	</Submit>
);

export const FormLabel: React.FC = ({ children, ...restProps }) => (
	<Label {...restProps}>{children}</Label>
);

export const FormGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

Form.Base = FormBase;
Form.Fieldset = FormFieldset;
Form.Group = FormGroup;
Form.Input = FormInput;
Form.Label = FormLabel;
Form.Submit = FormSubmit;

export default Form;
