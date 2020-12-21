/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from 'app/store';
import { Table } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import { Day } from './Schedule';

export interface RecipeProps {
	recipe: Day;
}

const Recipe: React.SFC<RecipeProps> = ({ recipe }) => {
	const recipes = useSelector((state: RootState) =>
		state.recipes.recipes.filter((item) => item.id === recipe.recipeId)
	);

	const recipeDetails = { ...recipes[0] };

	return (
		<Table.ColBody dataLabel={recipe.day} scope='row'>
			{recipeDetails.name}
		</Table.ColBody>
	);
};

export default Recipe;
