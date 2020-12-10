import { Form } from 'components';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export interface DashboardStartContainerProps {}

const DashboardStartContainer: React.SFC<DashboardStartContainerProps> = () => {
	const history = useHistory();

	const [user, setUser] = useState({
		name: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, name: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', JSON.stringify(user));
		} else {
			localStorage.removeItem('user');
			localStorage.setItem('user', JSON.stringify(user));
		}

		setUser({ name: '' });
		history.push('/dashboard/main');
		window.location.reload(false);
	};

	return (
		<Form>
			<Form.Title>Witaj,</Form.Title>
			<Form.Break />
			<Form.SubTitle>
				wygląda na to że jesteś tutaj pierwszy raz!{' '}
			</Form.SubTitle>
			<Form.Break />
			<Form.Base onSubmit={handleSubmit}>
				<Form.Input
					placeholder='tutaj wpisz jak masz na imię'
					onChange={handleChange}
					type='text'
					width='50'
					name='user'
					value={user.name}
				/>
				<Form.Break />
				<Form.Submit type='submit'>Gotowe!</Form.Submit>
			</Form.Base>
			<Form.Break />
			<Form.Text>
				Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację :)
			</Form.Text>
		</Form>
	);
};

export default DashboardStartContainer;
