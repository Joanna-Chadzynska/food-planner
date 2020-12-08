import { Form, Info } from 'components';
import React, { useState } from 'react';

export interface NewsletterProps {}

const Newsletter: React.SFC<NewsletterProps> = () => {
	const [state, setState] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(state);
		setState('');
	};
	return (
		<Info bg='gray' className='wrapper' direction='column'>
			<Info.Title>Zapisz się na newsletter</Info.Title>

			<Form>
				<Form.Base onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Input value={state} onChange={handleChange} type='text' />
						<Form.Submit type='submit'>Prześlij</Form.Submit>
					</Form.Group>
				</Form.Base>
			</Form>
		</Info>
	);
};

export default Newsletter;
