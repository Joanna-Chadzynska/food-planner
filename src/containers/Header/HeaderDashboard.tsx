import { Header, Logo } from 'components';
import React from 'react';

export interface HeaderDashboardProps {}

const HeaderDashboard: React.SFC<HeaderDashboardProps> = () => {
	return (
		<Header>
			<Logo />
			<Header.ToggleInput type='checkbox' id='nav-toggle' />
			<Header.Navigation>
				<Header.Item>
					<Header.AnchorLink href='#contact'>User</Header.AnchorLink>
				</Header.Item>
			</Header.Navigation>
			<Header.ToggleLabel htmlFor='nav-toggle'>
				<span></span>
			</Header.ToggleLabel>
		</Header>
	);
};

export default HeaderDashboard;
