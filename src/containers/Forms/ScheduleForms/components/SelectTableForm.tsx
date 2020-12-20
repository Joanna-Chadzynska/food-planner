import { RootState } from 'app/store';
import { Table } from 'components';
import { days, meals } from 'constants/schedules';
import { ScheduleWeek } from 'models/interfaces/Schedule';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export interface SelectTableFormProps {}

const SelectTableForm: React.SFC<SelectTableFormProps> = () => {
	const { recipes } = useSelector((state: RootState) => state.recipes);
	const { schedule } = useSelector((state: RootState) => state.schedules);
	const [recipeId, setRecipeId] = useState<number>();
	const [scheduleWeek, setScheduleWeek] = useState<ScheduleWeek>({
		monday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		tuesday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		wednesday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		thursday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		friday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		saturday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
		sunday: [
			{ name: 'breakfast', recipeId: 0 },
			{ name: 'lunch', recipeId: 0 },
			{ name: 'soup', recipeId: 0 },
			{ name: 'dinner', recipeId: 0 },
			{ name: 'supper', recipeId: 0 },
		],
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLSelectElement>,
		day: string
	) => {
		const { name, value } = e.target;

		if (value === '') return;
		if (name.includes(day)) {
			console.log(name);
		}
	};

	console.log(scheduleWeek);

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
											handleChange(e, day.id)
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
