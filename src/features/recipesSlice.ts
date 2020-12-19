import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Recipe, RecipesState } from 'models/interfaces/Recipe';

const initialState: RecipesState = {
	recipes: [],
	recipe: {
		name: '',
		description: '',
		steps: [],
		ingredients: [],
		id: 0,
	},
	loading: true,
	error: null,
};

export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		importRecipes: (state, { payload }: PayloadAction<Recipe[]>) => {
			state.recipes = payload;
			state.loading = false;
			state.error = null;
		},
		importRecipeById: (state, { payload }: PayloadAction<Recipe>) => {
			state.recipe = payload;
		},
		addRecipe: (state, { payload }: PayloadAction<Recipe>) => {
			const { name, description, steps, ingredients } = payload;
			state.recipe.steps = steps;
			state.recipe.ingredients = ingredients;
			state.recipe.name = name;
			state.recipe.description = description;
		},
	},
});

export const {
	importRecipes,
	importRecipeById,
	addRecipe,
} = recipesSlice.actions;

export const selectRecipes = (state: RootState) => state.recipes.recipes;
export const selectRecipe = (state: RootState) => state.recipes.recipe;

export default recipesSlice.reducer;
