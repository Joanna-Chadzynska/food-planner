import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
	Button,
	Container,
	Error,
	Fieldset,
	Group,
	GroupWrapper,
	Header,
	Input,
	Item,
	ItemInner,
	Label,
	OrderedList,
	Submit,
	SubTitle,
	Text,
	Textarea,
	Title,
	UnorderedList,
} from './styles/addEditForm';
import {
	AddEditFormComposition,
	AddEditFormProps,
	ButtonProps,
	FieldsetProps,
	InputProps,
	LabelProps,
	TextareaProps,
} from './types';

const AddEditForm: React.SFC<AddEditFormProps> & AddEditFormComposition = ({
	children,
	onSubmit,
	...restProps
}) => {
	return (
		<Container onSubmit={onSubmit} noValidate {...restProps}>
			{children}
		</Container>
	);
};

export const AddEditFormHeader: React.FC = ({ children, ...restProps }) => {
	return (
		<Header {...restProps}>
			<Title>{children}</Title>
			<Submit type='submit'>Zapisz i zamknij</Submit>
		</Header>
	);
};

export const AddEditFormFieldset: React.FC<FieldsetProps> = ({
	children,
	hasButton = false,
	...restProps
}) => (
	<Fieldset hasButton={hasButton} {...restProps}>
		{children}
	</Fieldset>
);

export const AddEditFormInput: React.FC<InputProps> = ({
	type,
	onChange,
	value,
	name,
	id,
	width,
	placeholder,
	...restProps
}) => (
	<Input
		onChange={onChange}
		value={value}
		id={id}
		name={name}
		placeholder={placeholder}
		type={type}
		width={width}
		{...restProps}
	/>
);

export const AddEditFormLabel: React.FC<LabelProps> = ({
	children,
	htmlFor,
	...restProps
}) => (
	<Label htmlFor={htmlFor} {...restProps}>
		{children}
	</Label>
);

export const AddEditFormTextarea: React.FC<TextareaProps> = ({
	onChange,
	name,
	id,
	value,
	minLength,
	maxLength,
	width,
	...restProps
}) => (
	<Textarea
		value={value}
		onChange={onChange}
		id={id}
		name={name}
		minLength={minLength}
		maxLength={maxLength}
		width={width}
		{...restProps}
	/>
);

export const AddEditFormGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

export const AddEditFormError: React.FC = ({ children, ...restProps }) => (
	<Error {...restProps}>{children}</Error>
);

export const AddEditFormGroupWrapper: React.FC = ({
	children,
	...restProps
}) => <GroupWrapper {...restProps}>{children}</GroupWrapper>;

export const AddEditFormSubTitle: React.FC = ({ children, ...restProps }) => (
	<SubTitle {...restProps}>{children}</SubTitle>
);

export const AddEditFormButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	...restProps
}) => (
	<Button type='button' onClick={onClick} {...restProps}>
		<FontAwesomeIcon icon={['fas', 'plus-square']} />
	</Button>
);

export const AddEditFormOrderedList: React.FC = ({
	children,
	...restProps
}) => <OrderedList {...restProps}>{children}</OrderedList>;

export const AddEditFormUnorderedList: React.FC = ({
	children,
	...restProps
}) => <UnorderedList {...restProps}>{children}</UnorderedList>;

export const AddEditFormItem: React.FC = ({ children, ...restProps }) => (
	<Item {...restProps}>
		<ItemInner>{children}</ItemInner>
	</Item>
);

export const AddEditFormText: React.FC = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

AddEditForm.Header = AddEditFormHeader;
AddEditForm.Fieldset = AddEditFormFieldset;
AddEditForm.Input = AddEditFormInput;
AddEditForm.Textarea = AddEditFormTextarea;
AddEditForm.Label = AddEditFormLabel;
AddEditForm.Group = AddEditFormGroup;
AddEditForm.GroupWrapper = AddEditFormGroupWrapper;
AddEditForm.Subtitle = AddEditFormSubTitle;
AddEditForm.Button = AddEditFormButton;
AddEditForm.OrderedList = AddEditFormOrderedList;
AddEditForm.UnorderedList = AddEditFormUnorderedList;
AddEditForm.Error = AddEditFormError;
AddEditForm.Item = AddEditFormItem;
AddEditForm.Text = AddEditFormText;

export default AddEditForm;
