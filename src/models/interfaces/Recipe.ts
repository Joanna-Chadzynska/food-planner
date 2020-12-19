export interface Recipe {
	id: number;
	name: string;
	description: string;
	steps: string[];
	step?: string;

	ingredients: string[];
	ingredient?: string;
}

export interface RecipeValidation {}

export interface RecipesState {
	recipes: Recipe[];
	recipe: Recipe;
	loading: boolean;
	error: null;
}

export interface Values {
	step: string;
	ingredient: string;
}

export interface Step {}

export interface Ingredient {}
