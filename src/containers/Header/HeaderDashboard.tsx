import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Header, Logo } from 'components';
import React from 'react';

library.add(fas);

export interface HeaderDashboardProps {}

const HeaderDashboard: React.SFC<HeaderDashboardProps> = () => {
	return (
		<Header className='dashboard'>
			<Logo />
			<Header.ToggleInput type='checkbox' id='nav-toggle' />
			<Header.Navigation>
				<Header.Item>
					<Header.AnchorLink href='#contact'>
						<span>Imię</span>{' '}
						<FontAwesomeIcon
							icon={['fas', 'user-circle']}
							size='3x'
							color='#ff6600'
						/>
						<i className='fa fa-user-circle-o' aria-hidden='true'></i>
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
