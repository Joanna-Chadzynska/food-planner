/* eslint-disable react-hooks/exhaustive-deps */
import { RootState } from 'app/store';
import { Table } from 'components';
import { importRecipeById } from 'features/recipesSlice';
import { useHttpClient } from 'hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface RecipeProps {
	recipe: number;
}

const Recipe: React.SFC<RecipeProps> = ({ recipe }) => {
	const client = useHttpClient();
	const dispatch = useDispatch();
	const recipes = useSelector((state: RootState) =>
		state.recipes.recipes.filter((item) => item.id === recipe)
	);

	const recipeDetails = { ...recipes[0] };

	const getRecipeDetails = async (): Promise<void> => {
		const response = await client.getRecipeById(recipe);
		dispatch(importRecipeById(response));
	};

	useEffect(() => {
		getRecipeDetails();
		return () => {};
	}, []);

	return <Table.ColBody>{recipeDetails.name}</Table.ColBody>;
};

export default Recipe;
