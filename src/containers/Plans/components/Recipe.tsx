/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from 'app/store';
import { Table } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

export interface RecipeProps {
	recipe: number;
}

const Recipe: React.SFC<RecipeProps> = ({ recipe }) => {
	const recipes = useSelector((state: RootState) =>
		state.recipes.recipes.filter((item) => item.id === recipe)
	);

	const recipeDetails = { ...recipes[0] };

	return <Table.ColBody>{recipeDetails.name}</Table.ColBody>;
};

export default Recipe;
