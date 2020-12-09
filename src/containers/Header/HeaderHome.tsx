import { Header, Logo } from 'components';
import React from 'react';

export interface HeaderHomeProps {}

const HeaderHome: React.SFC<HeaderHomeProps> = () => {
	return (
		<Header className='wrapper'>
			<Logo />
			<Header.ToggleInput type='checkbox' id='nav-toggle' />
			<Header.Navigation>
				<Header.Item>
					<Header.AnchorLink href='#app'>zaplanuj posiłki</Header.AnchorLink>
				</Header.Item>
				<Header.Item>
					<Header.AnchorLink href='#about-company'>
						dlaczego warto
					</Header.AnchorLink>
				</Header.Item>
				<Header.Item>
					<Header.AnchorLink href='#about-me'>o mnie</Header.AnchorLink>
				</Header.Item>
				<Header.Item>
					<Header.AnchorLink href='#contact'>kontakt</Header.AnchorLink>
				</Header.Item>
			</Header.Navigation>
			<Header.ToggleLabel htmlFor='nav-toggle'>
				<span></span>
			</Header.ToggleLabel>
		</Header>
	);
};

export default HeaderHome;
