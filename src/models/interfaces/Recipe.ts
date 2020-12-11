export interface Recipe {
	id: number;
	name: string;
	description: string;
	steps: string[];
	ingredients: string[];
}

export interface RecipesState {
	recipes: Recipe[];
	recipe: Recipe;
	loading: boolean;
	error: null;
}
