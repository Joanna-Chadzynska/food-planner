import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'app/store';
import { Recipe, RecipesState } from 'models/interfaces/Recipe';

const initialState: RecipesState = {
	recipes: [],
	recipe: {} as Recipe,
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

		incrementByAmount: (state, action: PayloadAction<number>) => {},
	},
});

export const { importRecipes, importRecipeById } = recipesSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch(incrementByAmount(amount));
// 	}, 1000);
// };

export const selectRecipes = (state: RootState) => state.recipes.recipes;
export const selectRecipe = (state: RootState) => state.recipes.recipe;

export default recipesSlice.reducer;
