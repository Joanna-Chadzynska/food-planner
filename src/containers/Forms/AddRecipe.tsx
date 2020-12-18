import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addRecipe } from 'features/recipesSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export interface AddRecipeProps {}

const AddRecipe: React.SFC<AddRecipeProps> = () => {
	const { recipe } = useSelector((state: RootState) => state.recipes);
	const dispatch = useDispatch();
	const [step, setStep] = useState('');
	const [ingredient, setIngredient] = useState('');

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(recipe);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name === 'step') {
			setStep(value);
		}
		if (name === 'ingredient') {
			setIngredient(value);
		}
		if (name === 'name') {
			dispatch(
				addRecipe({
					...recipe,
					name: value,
				})
			);
		}
		if (name === 'description') {
			dispatch(
				addRecipe({
					...recipe,
					description: value,
				})
			);
		}
	};

	const handleAddStep = () => {
		dispatch(
			addRecipe({
				...recipe,
				steps: [...recipe.steps, step],
			})
		);
		setStep('');
	};

	const handleAddIngredient = () => {
		dispatch(
			addRecipe({
				...recipe,
				ingredients: [...recipe.ingredients, ingredient],
			})
		);
		setIngredient('');
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
					onChange={handleChange}
					type='text'
				/>
			</AddEditForm.Fieldset>
			<AddEditForm.Fieldset>
				<AddEditForm.Label htmlFor='description'>
					Opis przepisu
				</AddEditForm.Label>
				<AddEditForm.Textarea
					id='description'
					name='description'
					value={recipe.description}
					onChange={handleChange}
				/>
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
