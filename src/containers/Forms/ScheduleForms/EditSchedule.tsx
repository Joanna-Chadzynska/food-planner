/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addSchedule, importScheduleById } from 'features/schedulesSlice';
import { useHttpClient } from 'hooks';
import { Schedule } from 'models/interfaces/Schedule';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateScheduleForm } from 'utils';
import { SelectTableForm } from './components';

export interface EditScheduleProps {
	setShowModal: any;
	id: number;
}

const EditSchedule: React.SFC<EditScheduleProps> = ({ setShowModal, id }) => {
	const { schedule } = useSelector((state: RootState) => state.schedules);
	const dispatch = useDispatch();
	const client = useHttpClient();
	const [errors, setErrors] = useState<Schedule>({} as Schedule);

	const fetchScheduleById = useCallback(
		async (id: number) => {
			const resp = await client.getScheduleById(id);
			dispatch(importScheduleById(resp));
		},

		[]
	);

	useEffect(() => {
		fetchScheduleById(id);
		return () => {};
	}, [id]);

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

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setErrors(validateScheduleForm(schedule));

		if (Object.keys(errors).length === 0) {
			console.log('dodano plan');
			client.updateSchedule(id, schedule);
			window.location.reload();
			setShowModal(false);
		} else {
			setErrors(errors);
		}
	};

	return (
		<AddEditForm onSubmit={handleSubmit}>
			<AddEditForm.Header>Edytuj plan</AddEditForm.Header>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='name'>Nazwa planu</AddEditForm.Label>
				<AddEditForm.Input
					id='name'
					name='name'
					value={schedule.name}
					onChange={handleChange}
					type='text'
				/>
				{errors && <AddEditForm.Error>{errors.name}</AddEditForm.Error>}
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>Opis planu</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value={schedule.description}
					onChange={handleChange}
				/>
				{errors && <AddEditForm.Error>{errors.description}</AddEditForm.Error>}
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
				{errors && <AddEditForm.Error>{errors.weekNumber}</AddEditForm.Error>}
			</AddEditForm.Fieldset>

			<SelectTableForm />
		</AddEditForm>
	);
};

export default EditSchedule;
