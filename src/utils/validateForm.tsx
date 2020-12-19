const validateForm = (value: any, type: string) => {
	let errors: any = {};

	if (type === 'step') {
		if (!value) {
			errors.step = 'Krok nie może być pusty';
		} else if (value.length > 150) {
			errors.step = 'Opis kroku nie może zawierać więcej niż 150 znaków';
		}
	}
	if (type === 'ingredient') {
		if (!value) {
			errors.ingredient = 'Składnik nie może być pusty';
		} else if (value.length > 50) {
			errors.ingredient =
				'Nazwa składnika nie może zawierać więcej niż 50 znaków';
		}
	}

	return errors;
};

export default validateForm;
