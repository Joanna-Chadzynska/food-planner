import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing/Routing';

library.add(far, fas);

const App = () => {
	return (
		<>
			{/* <Header>
				<img src='https://coderslab.pl/img/coderslab-logo.png' alt='logo' />
			</Header> */}

			{/* <Intro>
				<p>Scrum Lab React</p>
			</Intro> */}
			<Router>
				<Routing />
			</Router>
		</>
	);
};

export default App;
