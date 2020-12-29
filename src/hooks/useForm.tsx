/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const useForm = (callback: any, initialValues: any, validate: any) => {
	const [values, setValues] = useState({});
	const [errors, setErrors] = useState([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isValid, setIsValid] = useState(false);

	// useEffect hook to submit the form, runs when setErrors is called in handleSubmit because of the [errors] array we're passing as the second argument
	// callback czyli to co wysyłamy do bazy danych
	useEffect(() => {
		// if there are no errors and submit has been clicked
		if (Object.keys(errors).length === 0 && isSubmitting) {
			// submit the form
			callback(values);
			setIsSubmitting(false);
		} else {
			// show the errors
			// scrollFormUp();
			setIsSubmitting(false);
		}
	}, [errors]);

	// useEffect hook to hide and display errors while working on a validated form, runs when values change
	useEffect(() => {
		isValid && setErrors(validate(values));
	}, [values]);

	// CUSTOM METHODS
	// Runs when an input is changed, to update the data in state.
	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	// Runs when the form is submitted
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// prevent multiple clicks
		if (isSubmitting) {
			return;
		}
		// check for errors (triggers useEffect hook to submit the form)
		setErrors(validate(values));
		// change state to reflect form submission
		setIsSubmitting(true);
		setIsValid(true);
	};

	// Scroll the form to show errors
	// const scrollFormUp = () => {
	// 	if (errors.length > 0) {
	// 		const errorPosition =
	// 			document.getElementsByClassName('inputError')[0].offsetTop - 250;
	// 		window.scrollTo(0, errorPosition);
	// 	}
	// };

	return { values, errors, isSubmitting };
};

export default useForm;
