import { RootState } from 'app/store';
import { AddEditForm } from 'components';
import { addRecipe } from 'features/recipesSlice';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { validateForm } from 'utils';
import Step from './Step';

const Steps: React.SFC = () => {
	const { recipe } = useSelector((state: RootState) => state.recipes);
	const dispatch = useDispatch();
	const [step, setStep] = useState('');
	const [errors, setErrors] = useState<Recipe>({} as Recipe);

	const handleChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		const { value } = e.target;
		setErrors(validateForm(step, 'step'));
		setStep(value);
	};

	const handleAddStep = () => {
		setErrors(validateForm(step, 'step'));

		if (Object.keys(errors).length === 0 && step) {
			dispatch(
				addRecipe({
					...recipe,
					steps: [...recipe.steps, step],
				})
			);
			setStep('');
		}
	};

	const removeStep = (step: string) => {
		dispatch(
			addRecipe({
				...recipe,
				steps: recipe.steps.filter((item) => item !== step),
			})
		);
	};

	const editStep = (id: string, newStep: string) => {
		const editedSteps = recipe.steps.map((step) => {
			if (id === step) {
				step = newStep;
			}
			return step;
		});
		dispatch(
			addRecipe({
				...recipe,
				steps: editedSteps,
			})
		);
	};

	return (
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
					<Step
						key={step}
						step={step}
						deleteStep={removeStep}
						editStep={editStep}
					/>
				))}
			</AddEditForm.OrderedList>
		</AddEditForm.Group>
	);
};

export default Steps;
