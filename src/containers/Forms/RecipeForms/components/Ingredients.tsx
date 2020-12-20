import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addRecipe } from 'features/recipesSlice';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateForm } from 'utils';
import Ingredient from './Ingredient';

export interface IngredientsProps {}

const Ingredients: React.SFC<IngredientsProps> = () => {
	const { recipe } = useSelector((state: RootState) => state.recipes);
	const dispatch = useDispatch();
	const [ingredient, setIngredient] = useState('');
	const [errors, setErrors] = useState<Recipe>({} as Recipe);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setErrors(validateForm(ingredient, 'ingredient'));
		setIngredient(value);
	};

	const handleAddIngredient = () => {
		setErrors(validateForm(ingredient, 'ingredient'));
		if (Object.keys(errors).length === 0 && ingredient) {
			dispatch(
				addRecipe({
					...recipe,
					ingredients: [...recipe.ingredients, ingredient],
				})
			);
			setIngredient('');
		}
	};

	const removeIngredient = (ingredient: string) => {
		dispatch(
			addRecipe({
				...recipe,
				ingredients: recipe.ingredients.filter((item) => item !== ingredient),
			})
		);
	};

	const editIngredient = (id: string, newIngredient: string) => {
		const editedIngredients = recipe.ingredients.map((ingredient) => {
			if (id === ingredient) {
				ingredient = newIngredient;
			}
			return ingredient;
		});
		dispatch(
			addRecipe({
				...recipe,
				ingredients: editedIngredients,
			})
		);
	};

	return (
		<AddEditForm.Group>
			<AddEditForm.Subtitle>Instrukcje</AddEditForm.Subtitle>
			<AddEditForm.Fieldset hasButton={true}>
				<AddEditForm.Input
					id='step'
					name='step'
					value={ingredient}
					onChange={handleChange}
					type='text'
				/>

				<AddEditForm.Button onClick={handleAddIngredient} />

				{errors && <AddEditForm.Error>{errors.step}</AddEditForm.Error>}
			</AddEditForm.Fieldset>
			<AddEditForm.UnorderedList>
				{recipe.ingredients.map((ingredient) => (
					<Ingredient
						key={ingredient}
						ingredient={ingredient}
						deleteIngredient={removeIngredient}
						editIngredient={editIngredient}
					/>
				))}
			</AddEditForm.UnorderedList>
		</AddEditForm.Group>
	);
};

export default Ingredients;
