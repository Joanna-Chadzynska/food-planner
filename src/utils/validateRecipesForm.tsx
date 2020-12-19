import { Recipe } from 'models/interfaces/Recipe';

const validateRecipesForm = <T extends Recipe>(values: T): T => {
	let errors: any = {};
	if (!values?.name) {
		errors.name = 'Nazwa nie może być pusta';
	} else if (values.name.length > 50) {
		errors.name = 'Nazwa nie może zawierać więcej niż 50 znaków';
	}

	if (!values.description) {
		errors.description = 'Opis nie może być pusty';
	} else if (values.description.length > 360) {
		errors.description = 'Opis nie może zawierać więcej niż 360 znaków';
	}

	if (values.steps.length === 0) {
		errors.steps = 'Instrukcja nie może być pusta';
	}

	if (values.ingredients.length === 0) {
		errors.ingredients = 'Składniki nie mogą być puste';
	}

	return errors;
};

export default validateRecipesForm;
