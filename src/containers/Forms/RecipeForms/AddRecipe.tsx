import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addRecipe } from 'features/recipesSlice';
import { useHttpClient } from 'hooks';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateRecipesForm } from 'utils';
import { Ingredients, Steps } from './components';

export interface AddRecipeProps {
	showModal?: boolean;
	setShowModal?: any;
}

export interface ErrorProps {
	description: string;
	ingredients: string;
	ingredient: string;
	name: string;
	steps: string;
	step: string;
}

const AddRecipe: React.SFC<AddRecipeProps> = ({ setShowModal }) => {
	const { recipe } = useSelector((state: RootState) => state.recipes);
	const dispatch = useDispatch();
	const client = useHttpClient();
	const [errors, setErrors] = useState<Recipe>({} as Recipe);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const errorsObj = validateRecipesForm(recipe);

		if (
			Object.keys(errorsObj).length === 0 &&
			Object.keys(errors).length === 0
		) {
			client.addRecipe(recipe);
			window.location.reload();
			setShowModal(false);
		} else {
			setErrors(errorsObj);
		}
	};

	const handleChangeItem = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		dispatch(
			addRecipe({
				...recipe,
				[name]: value,
			})
		);
	};

	return (
		<AddEditForm onSubmit={handleSubmit}>
			<AddEditForm.Header>Nowy przepis</AddEditForm.Header>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='name'>Nazwa przepisu</AddEditForm.Label>
				<AddEditForm.Input
					id='name'
					name='name'
					value={recipe.name}
					onChange={handleChangeItem}
					type='text'
				/>
				{errors.name && <AddEditForm.Error>{errors.name}</AddEditForm.Error>}
			</AddEditForm.Fieldset>

			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>
					Opis przepisu
				</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value={recipe.description}
					onChange={handleChangeItem}
				/>
				{errors.description && (
					<AddEditForm.Error>{errors.description}</AddEditForm.Error>
				)}
			</AddEditForm.Fieldset>

			<AddEditForm.GroupWrapper>
				<Steps />

				<Ingredients />
			</AddEditForm.GroupWrapper>
		</AddEditForm>
	);
};

export default AddRecipe;
