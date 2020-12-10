import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Logo } from 'components';
import * as ROUTES from 'constants/routes';
import React, { useEffect, useState } from 'react';

library.add(fas);

type User = {
	name: string;
};

const HeaderDashboard: React.SFC = () => {
	const [userData, setUserData] = useState<User>();
	const user = localStorage.getItem('user');

	useEffect(() => {
		if (user?.length && typeof user === 'string') {
			setUserData(JSON.parse(user));
		}
		return () => {};
	}, [user]);

	const logOut = (name: string | undefined) => {
		localStorage.removeItem('user');
		window.location.reload();
	};

	return (
		<Header className='dashboard'>
			<Logo />
			<Header.ToggleInput type='checkbox' id='nav-toggle' />
			<Header.Navigation>
				<Header.Profile>
					<Header.Group>
						<Header.Link to={ROUTES.USER_PROFILE}>
							{user ? userData?.name : ''}
						</Header.Link>
						<Header.Picture>
							<FontAwesomeIcon
								icon={['fas', 'user-circle']}
								size='2x'
								color='#ff6600'
							/>
						</Header.Picture>
					</Header.Group>
					<Header.Dropdown>
						<Header.Group>
							<Header.Link to={ROUTES.USER_PROFILE}>Profil</Header.Link>
						</Header.Group>
						<br />
						<Header.Group>
							<Header.Button onClick={() => logOut(userData?.name)}>
								Wyloguj się
							</Header.Button>
						</Header.Group>
					</Header.Dropdown>
				</Header.Profile>
			</Header.Navigation>
			<Header.ToggleLabel htmlFor='nav-toggle'>
				<span></span>
			</Header.ToggleLabel>
		</Header>
	);
};

export default HeaderDashboard;
