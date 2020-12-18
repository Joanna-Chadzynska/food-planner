import { AddEditForm } from 'components';
import React from 'react';

export interface AddScheduleProps {}

const AddSchedule: React.SFC<AddScheduleProps> = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {};

	return (
		<AddEditForm onSubmit={handleSubmit}>
			<AddEditForm.Header>Nowy plan</AddEditForm.Header>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='name'>Nazwa planu</AddEditForm.Label>
				<AddEditForm.Input
					id='name'
					name='name'
					value=''
					onChange={handleChange}
					type='text'
				/>
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>Opis planu</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value=''
					onChange={handleChange}
				/>
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>
					Numer tygodnia
				</AddEditForm.Label>
				<AddEditForm.Input
					id='description'
					name='description'
					value=''
					onChange={handleChange}
					type='number'
				/>
			</AddEditForm.Fieldset>
		</AddEditForm>
	);
};

export default AddSchedule;
