import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addSchedule } from 'features/schedulesSlice';
import { useHttpClient } from 'hooks';
import { Schedule } from 'models/interfaces/Schedule';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SelectTableForm } from './components';

export interface AddScheduleProps {}

const AddSchedule: React.SFC<AddScheduleProps> = () => {
	const { schedule } = useSelector((state: RootState) => state.schedules);
	const dispatch = useDispatch();
	const client = useHttpClient();
	const [errors, setErrors] = useState<Schedule>({} as Schedule);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		dispatch(
			addSchedule({
				...schedule,
				[name]: value,
			})
		);
	};

	return (
		<AddEditForm onSubmit={handleSubmit}>
			<AddEditForm.Header>Nowy plan</AddEditForm.Header>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='name'>Nazwa planu</AddEditForm.Label>
				<AddEditForm.Input
					id='name'
					name='name'
					value={schedule.name}
					onChange={handleChange}
					type='text'
				/>
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>Opis planu</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value={schedule.description}
					onChange={handleChange}
				/>
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>
					Numer tygodnia
				</AddEditForm.Label>
				<AddEditForm.Input
					id='weekNumber'
					name='weekNumber'
					value={schedule.weekNumber}
					onChange={handleChange}
					type='number'
					min='1'
					max='52'
				/>
			</AddEditForm.Fieldset>

			<SelectTableForm />
		</AddEditForm>
	);
};

export default AddSchedule;
