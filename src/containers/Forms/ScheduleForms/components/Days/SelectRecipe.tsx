import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addSchedule } from 'features/schedulesSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface SelectRecipeProps {
	day: string;
	meal: string;
	dayRecipeId: number | undefined;
}

const SelectRecipe: React.SFC<SelectRecipeProps> = ({
	day,
	meal,
	dayRecipeId,
}) => {
	const dispatch = useDispatch();
	const { recipes } = useSelector((state: RootState) => state.recipes);
	const { schedule } = useSelector((state: RootState) => state.schedules);

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
		<AddEditForm.Select
			name={day}
			value={dayRecipeId}
			onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
				handleChange(e, day, meal)
			}>
			<AddEditForm.Option optValue=''>--Wybierz przepis--</AddEditForm.Option>
			{recipes.map((recipe) => (
				<AddEditForm.Option key={recipe.id} optValue={recipe.id}>
					{recipe.name}
				</AddEditForm.Option>
			))}
		</AddEditForm.Select>
	);
};

export default SelectRecipe;
