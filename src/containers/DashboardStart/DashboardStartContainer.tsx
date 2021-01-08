import { Form } from 'components';
import { setNewUser, updateUser } from 'features/userSlice';
import { useHttpClient } from 'hooks';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export interface DashboardStartContainerProps {}

const DashboardStartContainer: React.SFC<DashboardStartContainerProps> = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const client = useHttpClient();

	const [user, setUser] = useState({
		name: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, name: e.target.value });
	};

	const createNewUser = async (): Promise<void> => {
		Promise.resolve(client.createUser(user)).then((resp) =>
			dispatch(setNewUser(resp))
		);
	};

	const clearUserData = async (): Promise<void> => {
		Promise.resolve(client.clearUser({ name: '' })).then((resp) =>
			dispatch(updateUser(resp))
		);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (user.name.length < 3) return;
		if (!localStorage.getItem('user')) {
			localStorage.setItem('user', JSON.stringify(user));
			createNewUser();
		} else {
			localStorage.removeItem('user');
			clearUserData();
			localStorage.setItem('user', JSON.stringify(user));
			createNewUser();
		}

		setUser({ name: '' });
		history.push('/dashboard/main');
		window.location.reload();
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
