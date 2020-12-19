import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addRecipe } from 'features/recipesSlice';
import { useHttpClient } from 'hooks';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateForm, validateRecipesForm } from 'utils';

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

const AddRecipe: React.SFC<AddRecipeProps> = ({ showModal, setShowModal }) => {
	const { recipe } = useSelector((state: RootState) => state.recipes);
	const dispatch = useDispatch();
	const client = useHttpClient();
	const [step, setStep] = useState('');
	const [ingredient, setIngredient] = useState('');
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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name === 'step') {
			setStep(value);
			setErrors(validateForm(step, 'step'));
		}

		if (name === 'ingredient') {
			setIngredient(value);
			setErrors(validateForm(ingredient, 'ingredient'));
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

	const handleAddStep = () => {
		const errors = validateForm(step, 'step');
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			dispatch(
				addRecipe({
					...recipe,
					steps: [...recipe.steps, step],
				})
			);
			setStep('');
		}
	};

	const handleAddIngredient = () => {
		const errors = validateForm(ingredient, 'ingredient');
		setErrors(errors);
		if (Object.keys(errors).length === 0) {
			dispatch(
				addRecipe({
					...recipe,
					ingredients: [...recipe.ingredients, ingredient],
				})
			);
			setIngredient('');
		}
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
				<AddEditForm.Group>
					<AddEditForm.Subtitle>Instrukcje</AddEditForm.Subtitle>
					<AddEditForm.Fieldset hasButton={true}>
						<AddEditForm.Textarea
							id='step'
							name='step'
							value={step}
							onChange={handleChange}
						/>

						<AddEditForm.Button onClick={handleAddStep} />

						{errors && <AddEditForm.Error>{errors.step}</AddEditForm.Error>}
					</AddEditForm.Fieldset>

					<AddEditForm.OrderedList>
						{recipe.steps.map((step) => (
							<li key={step}>{step}</li>
						))}
					</AddEditForm.OrderedList>
				</AddEditForm.Group>

				<AddEditForm.Group>
					<AddEditForm.Subtitle>Składniki</AddEditForm.Subtitle>

					<AddEditForm.Fieldset hasButton={true}>
						<AddEditForm.Input
							id='ingredient'
							name='ingredient'
							value={ingredient}
							onChange={handleChange}
							type='text'
						/>

						<AddEditForm.Button onClick={handleAddIngredient} />

						{errors.ingredient && (
							<AddEditForm.Error>{errors.ingredient}</AddEditForm.Error>
						)}
					</AddEditForm.Fieldset>

					<AddEditForm.UnorderedList>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient}>{ingredient}</li>
						))}
					</AddEditForm.UnorderedList>
				</AddEditForm.Group>
			</AddEditForm.GroupWrapper>
		</AddEditForm>
	);
};

export default AddRecipe;
