import { Header, Logo } from 'components';
import React from 'react';

const App = () => {
	return (
		<>
			{/* <Header>
				<img src='https://coderslab.pl/img/coderslab-logo.png' alt='logo' />
			</Header> */}

			{/* <Intro>
				<p>Scrum Lab React</p>
			</Intro> */}

			<Header>
				<Logo />
				<Header.ToggleInput type='checkbox' id='nav-toggle' />
				<Header.Navigation>
					<Header.Item>
						<Header.AnchorLink href='#app'>zaplanuj posiłki</Header.AnchorLink>
					</Header.Item>
					<Header.Item>
						<Header.AnchorLink href='#why-us'>dlaczego warto</Header.AnchorLink>
					</Header.Item>
					<Header.Item>
						<Header.AnchorLink href='#about'>o mnie</Header.AnchorLink>
					</Header.Item>
					<Header.Item>
						<Header.AnchorLink href='#contact'>kontakt</Header.AnchorLink>
					</Header.Item>
				</Header.Navigation>
				<Header.ToggleLabel htmlFor='nav-toggle'>
					<span></span>
				</Header.ToggleLabel>
			</Header>
		</>
	);
};

export default App;
