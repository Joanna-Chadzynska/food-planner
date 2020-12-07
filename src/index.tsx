import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import { store } from './app/store';
import { GlobalStyle } from './styles/globalStyles';
import Theme from './styles/theme';

ReactDOM.render(
	<React.StrictMode>
		<Theme>
			<Provider store={store}>
				<GlobalStyle />
				<App />
			</Provider>
		</Theme>
	</React.StrictMode>,
	document.getElementById('root')
);
