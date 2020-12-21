import { Table } from 'components';
import { Schedule } from 'models/interfaces/Schedule';
import React, { useCallback, useEffect, useState } from 'react';
import Recipe from './Recipe';

export interface Recipes {
	breakfast: Day[];
	lunch: Day[];
	soup: Day[];
	dinner: Day[];
	supper: Day[];
}

export interface Day {
	recipeId: number | undefined;
	day: string;
}

const ScheduleItem: React.SFC<Schedule> = ({
	weekNumber,
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday,
	sunday,
	id,
}) => {
	const [recipes, setRecipes] = useState<Recipes>({
		breakfast: [],
		lunch: [],
		soup: [],
		dinner: [],
		supper: [],
	});

	const addRecipes = useCallback(() => {
		const schedule = [
			{
				day: 'monday',
				plan: monday,
			},
			{
				day: 'tuesday',
				plan: tuesday,
			},
			{
				day: 'wednesday',
				plan: wednesday,
			},
			{
				day: 'thursday',
				plan: thursday,
			},
			{
				day: 'friday',
				plan: friday,
			},
			{
				day: 'saturday',
				plan: saturday,
			},
			{
				day: 'sunday',
				plan: sunday,
			},
		];

		for (let [, value] of Object.entries(schedule)) {
			recipes.breakfast = [
				...recipes.breakfast,
				{ day: value.day, recipeId: value.plan[0].recipeId },
			];

			recipes.lunch = [
				...recipes.lunch,
				{ day: value.day, recipeId: value.plan[1].recipeId },
			];

			recipes.soup = [
				...recipes.soup,
				{ day: value.day, recipeId: value.plan[2].recipeId },
			];

			recipes.dinner = [
				...recipes.dinner,
				{ day: value.day, recipeId: value.plan[3].recipeId },
			];

			recipes.supper = [
				...recipes.supper,
				{ day: value.day, recipeId: value.plan[4].recipeId },
			];
		}

		setRecipes({
			...recipes,
			breakfast: recipes.breakfast,
			lunch: recipes.lunch,
			soup: recipes.soup,
			dinner: recipes.dinner,
			supper: recipes.supper,
		});
	}, [recipes, monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

	useEffect(() => {
		addRecipes();
		return () => {
			setRecipes({
				breakfast: [],
				lunch: [],
				soup: [],
				dinner: [],
				supper: [],
			});
		};
	}, []);

	return (
		<Table.Inner>
			<Table.Title>Twój plan na {weekNumber} tydzień: </Table.Title>
			<Table.Header>
				<Table.Row>
					<Table.ColHeader scope='col'>Poniedziałek</Table.ColHeader>
					<Table.ColHeader scope='col'>Wtorek</Table.ColHeader>
					<Table.ColHeader scope='col'>Środa</Table.ColHeader>
					<Table.ColHeader scope='col'>Czwartek</Table.ColHeader>
					<Table.ColHeader scope='col'>Piątek</Table.ColHeader>
					<Table.ColHeader scope='col'>Sobota</Table.ColHeader>
					<Table.ColHeader scope='col'>Niedziela</Table.ColHeader>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					{recipes.breakfast.map((recipe, index) => (
						<Recipe key={`breakfast-${recipe}-${index}`} recipe={recipe} />
					))}
				</Table.Row>
				<Table.Row>
					{recipes.lunch.map((recipe, index) => (
						<Recipe key={`lunch-${recipe}-${index}`} recipe={recipe} />
					))}
				</Table.Row>
				<Table.Row>
					{recipes.soup.map((recipe, index) => (
						<Recipe key={`soup-${recipe}-${index}`} recipe={recipe} />
					))}
				</Table.Row>
				<Table.Row>
					{recipes.dinner.map((recipe, index) => (
						<Recipe key={`dinner-${recipe}-${index}`} recipe={recipe} />
					))}
				</Table.Row>
				<Table.Row>
					{recipes.supper.map((recipe, index) => (
						<Recipe key={`supper-${recipe}-${index}`} recipe={recipe} />
					))}
				</Table.Row>
			</Table.Body>
		</Table.Inner>
	);
};

export default ScheduleItem;
