import { AddEditForm } from 'components';
import { ActionsEditItem } from 'containers/Actions';
import { Recipe } from 'models/interfaces/Recipe';
import * as React from 'react';
import { validateForm } from 'utils';
import Actions from '../Actions';

export interface IngredientProps {
	ingredient: string;
	deleteIngredient: (ingredient: string) => void;
	editIngredient: (id: string, newIngredient: string) => void;
}

const Ingredient: React.SFC<IngredientProps> = ({
	ingredient,
	deleteIngredient,
	editIngredient,
}) => {
	const [isEditing, setIsEditing] = React.useState(false);
	const [newIngredient, setNewIngredient] = React.useState(ingredient);
	const [errors, setErrors] = React.useState<Recipe>({} as Recipe);

	const handleChangeIngredient = (e: React.ChangeEvent<HTMLInputElement>) => {
		setErrors(validateForm(newIngredient, 'ingredient'));
		setNewIngredient(e.target.value);
	};

	const handleAddNewIngredient = () => {
		setErrors(validateForm(newIngredient, 'ingredient'));

		if (Object.keys(errors).length === 0) {
			editIngredient(ingredient, newIngredient);
			setNewIngredient('');
			setIsEditing(false);
		}
	};

	console.log(ingredient);

	return (
		<>
			{isEditing ? (
				<AddEditForm.Item>
					<input value={newIngredient} onChange={handleChangeIngredient} />
					{errors && <p>{errors.ingredient}</p>}

					<ActionsEditItem
						cancelEditing={() => setIsEditing(false)}
						saveItem={handleAddNewIngredient}
					/>
				</AddEditForm.Item>
			) : (
				<AddEditForm.Item>
					<AddEditForm.Text>{ingredient}</AddEditForm.Text>
					<Actions
						removeItem={() => deleteIngredient(ingredient)}
						editItem={() => setIsEditing(true)}
					/>
				</AddEditForm.Item>
			)}
		</>
	);
};

export default Ingredient;
