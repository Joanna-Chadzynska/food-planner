import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import ModalProvider from 'contexts/ModalContext';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routing/Routing';

library.add(far, fas);

const App = () => {
	return (
		<ModalProvider>
			<Router>
				<Routing />
			</Router>
		</ModalProvider>
	);
};

export default App;
