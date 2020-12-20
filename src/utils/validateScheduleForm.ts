import { Schedule } from 'models/interfaces/Schedule';

const validateScheduleForm = <T extends Schedule>(values: T): T => {
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

	if (!values.weekNumber) {
		errors.weekNumber = 'Podaj numer tygodnia';
	}

	if (
		!values.monday ||
		!values.tuesday ||
		!values.wednesday ||
		!values.thursday ||
		!values.friday ||
		!values.saturday ||
		!values.sunday
	) {
		errors.monday = 'setup week recipe';
		errors.tuesday = 'setup week recipe';
		errors.wednesday = 'setup week recipe';
		errors.thursday = 'setup week recipe';
		errors.friday = 'setup week recipe';
		errors.saturday = 'setup week recipe';
		errors.sunday = 'setup week recipe';
	}

	return errors;
};

export default validateScheduleForm;
