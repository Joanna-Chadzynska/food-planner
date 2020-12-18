import { AddEditForm } from 'components';
import * as React from 'react';

export interface AddShoppingListProps {}

const AddShoppingList: React.SFC<AddShoppingListProps> = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {};

	return (
		<AddEditForm onSubmit={handleSubmit}>
			<AddEditForm.Header>Nowa lista zakupów</AddEditForm.Header>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='name'>Nazwa listy</AddEditForm.Label>
				<AddEditForm.Input
					id='name'
					name='name'
					value=''
					onChange={handleChange}
					type='text'
				/>
			</AddEditForm.Fieldset>
			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>Opis listy</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value=''
					onChange={handleChange}
				/>
			</AddEditForm.Fieldset>
		</AddEditForm>
	);
};

export default AddShoppingList;
