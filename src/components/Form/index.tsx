import { SubmitProps } from 'components/Info/types';
import React from 'react';
import {
	Base,
	Break,
	Container,
	Fieldset,
	Group,
	Input,
	Label,
	Submit,
	SubTitle,
	Text,
	Title,
} from './styles/form';
import { FormProps, InputProps } from './types';

export interface FormComposition {
	Base: React.FC<FormProps>;
	Fieldset: React.FC;
	Input: React.FC<InputProps>;
	Label: React.FC;
	Submit: React.FC<SubmitProps>;
	Group: React.FC;
	Title: React.FC;
	SubTitle: React.FC;
	Text: React.FC;
	Break: React.FC;
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
	placeholder,
	width,
	...restProps
}) => (
	<Input
		onChange={onChange}
		type={type}
		name={name}
		value={value}
		id={id}
		placeholder={placeholder}
		width={width}
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

export const FormTitle: React.FC = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

export const FormSubTitle: React.FC = ({ children, ...restProps }) => (
	<SubTitle {...restProps}>{children}</SubTitle>
);

export const FormText: React.FC = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

export const FormBreak: React.FC = ({ children, ...restProps }) => (
	<Break {...restProps}>{children}</Break>
);

Form.Base = FormBase;
Form.Break = FormBreak;
Form.Fieldset = FormFieldset;
Form.Group = FormGroup;
Form.Input = FormInput;
Form.Label = FormLabel;
Form.Submit = FormSubmit;
Form.Text = FormText;
Form.Title = FormTitle;
Form.SubTitle = FormSubTitle;

export default Form;
