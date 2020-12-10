import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Logo } from 'components';
import React, { useEffect, useState } from 'react';

library.add(fas);

export interface HeaderDashboardProps {}

type User = {
	name: string;
};

const HeaderDashboard: React.SFC<HeaderDashboardProps> = () => {
	const [userData, setUserData] = useState<User>();
	const user = localStorage.getItem('user');

	useEffect(() => {
		if (user?.length && typeof user === 'string') {
			setUserData(JSON.parse(user));
		}
		return () => {};
	}, [user]);

	return (
		<Header className='dashboard'>
			<Logo />
			<Header.ToggleInput type='checkbox' id='nav-toggle' />
			<Header.Navigation>
				<Header.Item>
					<Header.AnchorLink href='#'>
						<span>{user ? userData?.name : ''}</span>
						<FontAwesomeIcon
							icon={['fas', 'user-circle']}
							size='2x'
							color='#ff6600'
						/>
					</Header.AnchorLink>
				</Header.Item>
			</Header.Navigation>
			<Header.ToggleLabel htmlFor='nav-toggle'>
				<span></span>
			</Header.ToggleLabel>
		</Header>
	);
};

export default HeaderDashboard;
