import { RootState } from 'app/store';
import { Table } from 'components';
import { days, meals } from 'constants/schedules';
import { addSchedule } from 'features/schedulesSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface SelectTableFormProps {}

const SelectTableForm: React.SFC<SelectTableFormProps> = () => {
	const dispatch = useDispatch();
	const { recipes } = useSelector((state: RootState) => state.recipes);
	const { schedule } = useSelector((state: RootState) => state.schedules);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [recipeId, setRecipeId] = useState<number>();

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
		day: string,
		meal: string
	) => {
		const { value } = e.target;
		if (value === '') return;

		switch (day) {
			case 'monday':
				const mondayClone = JSON.parse(JSON.stringify(schedule.monday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						monday: mondayClone,
					})
				);

			case 'tuesday':
				const tuesdayClone = JSON.parse(JSON.stringify(schedule.tuesday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						tuesday: tuesdayClone,
					})
				);

			case 'wednesday':
				const wednesdayClone = JSON.parse(
					JSON.stringify(schedule.wednesday)
				).map((item: any) => {
					if (item.name === meal) {
						item.recipeId = +value;
					}
					return item;
				});
				return dispatch(
					addSchedule({
						...schedule,
						wednesday: wednesdayClone,
					})
				);

			case 'thursday':
				const thursdayClone = JSON.parse(JSON.stringify(schedule.thursday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						thursday: thursdayClone,
					})
				);
			case 'friday':
				const fridayClone = JSON.parse(JSON.stringify(schedule.friday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						friday: fridayClone,
					})
				);

			case 'saturday':
				const saturdayClone = JSON.parse(JSON.stringify(schedule.saturday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						saturday: saturdayClone,
					})
				);
			case 'sunday':
				const sundayClone = JSON.parse(JSON.stringify(schedule.sunday)).map(
					(item: any) => {
						if (item.name === meal) {
							item.recipeId = +value;
						}
						return item;
					}
				);
				return dispatch(
					addSchedule({
						...schedule,
						sunday: sundayClone,
					})
				);
		}
	};

	return (
		<Table>
			<Table.Inner>
				<Table.Header>
					<Table.Row dataIdRow='header'>
						<Table.ColHeader></Table.ColHeader>
						{meals.map((meal) => (
							<Table.ColHeader dataIdCol={meal.id} scope='col' key={meal.id}>
								{meal.name.toUpperCase()}
							</Table.ColHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{days.map((day) => (
						<Table.Row key={day.id} dataIdRow={day.id}>
							<Table.ColHeader dataIdCol='days' scope='row'>
								{day.name.toUpperCase()}
							</Table.ColHeader>
							{meals.map((meal) => (
								<Table.ColBody dataIdCol={meal.id} key={meal.id}>
									<select
										name={`${day.id} ${meal.id}`}
										id='recipe-select'
										value={recipeId}
										onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
											handleChange(e, day.id, meal.id)
										}>
										<option value=''>--Wybierz przepis--</option>
										{recipes.map((recipe) => (
											<option key={recipe.id} value={recipe.id}>
												{recipe.name}
											</option>
										))}
									</select>
								</Table.ColBody>
							))}
						</Table.Row>
					))}
				</Table.Body>
			</Table.Inner>
		</Table>
	);
};

export default SelectTableForm;
