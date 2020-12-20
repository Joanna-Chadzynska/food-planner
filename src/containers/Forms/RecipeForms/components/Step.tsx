import { AddEditForm } from 'components';
import { ActionsEditItem } from 'containers/Actions';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useState } from 'react';
import { validateForm } from 'utils';
import Actions from '../Actions';

export interface StepProps {
	step: string;
	deleteStep: (step: string) => void;
	editStep: (id: string, newStep: string) => void;
}

const Step: React.SFC<StepProps> = ({ step, deleteStep, editStep }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [newStep, setNewStep] = useState(step);
	const [errors, setErrors] = useState<Recipe>({} as Recipe);

	const handleChangeStep = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setErrors(validateForm(newStep, 'step'));
		setNewStep(e.target.value);
	};

	const handleAddNewStep = () => {
		setErrors(validateForm(newStep, 'step'));

		if (Object.keys(errors).length === 0) {
			editStep(step, newStep);
			setNewStep('');
			setIsEditing(false);
		}
	};

	return (
		<>
			{isEditing ? (
				<AddEditForm.Item>
					<textarea value={newStep} onChange={handleChangeStep} />
					{errors && <p>{errors.step}</p>}

					<ActionsEditItem
						cancelEditing={() => setIsEditing(false)}
						saveItem={handleAddNewStep}
					/>
				</AddEditForm.Item>
			) : (
				<AddEditForm.Item>
					<AddEditForm.Text>{step}</AddEditForm.Text>
					<Actions
						removeItem={() => deleteStep(step)}
						editItem={() => setIsEditing(true)}
					/>
				</AddEditForm.Item>
			)}
		</>
	);
};

export default Step;
