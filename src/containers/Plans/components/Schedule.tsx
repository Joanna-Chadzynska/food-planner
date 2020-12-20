/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from 'components';
import { Schedule } from 'models/interfaces/Schedule';
import React, { useCallback, useEffect, useState } from 'react';
import Recipe from './Recipe';

export interface Recipes {
	breakfast: number[];
	lunch: number[];
	soup: number[];
	dinner: number[];
	supper: number[];
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

		let breakfast: any[] = [];
		let lunch: any[] = [];
		let soup: any[] = [];
		let dinner: any[] = [];
		let supper: any[] = [];

		for (let [, value] of Object.entries(schedule)) {
			breakfast = [...breakfast, value.plan[0].recipeId];
			lunch = [...lunch, value.plan[1].recipeId];
			soup = [...soup, value.plan[2].recipeId];
			dinner = [...dinner, value.plan[3].recipeId];
			supper = [...supper, value.plan[4].recipeId];
		}

		setRecipes({
			...recipes,
			breakfast,
			lunch,
			soup,
			dinner,
			supper,
		});
	}, [recipes, monday, tuesday, wednesday, thursday, friday, saturday, sunday]);

	useEffect(() => {
		addRecipes();
		return () => {};
	}, []);

	return (
		<Table.Inner>
			<Table.Title>Twój plan na {weekNumber} tydzień: </Table.Title>
			<Table.Header>
				<Table.Row>
					<Table.ColHeader>Poniedziałek</Table.ColHeader>
					<Table.ColHeader>Wtorek</Table.ColHeader>
					<Table.ColHeader>Środa</Table.ColHeader>
					<Table.ColHeader>Czwartek</Table.ColHeader>
					<Table.ColHeader>Piątek</Table.ColHeader>
					<Table.ColHeader>Sobota</Table.ColHeader>
					<Table.ColHeader>Niedziela</Table.ColHeader>
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
