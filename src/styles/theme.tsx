import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
	colors: {
		sidebarNav: '#5b605f',
		txtCol_header: '#4a4a49',
		txtRow_extend: '#a1a194',
		btn_screens: '#ff6600',
		backgroundScreens: ' #fffffa',
		info: '#3498db',
		warning: '#ffb03b',
		success: '#468966',
		trash: '#bd4932',
	},
	fonts: {
		family: {
			awesome: 'Font Awesome',
			openSans: "'Open Sans', sans-serif",
			charmonman: "'Charmonman', cursive",
		},
		size: {
			base: '14px',
		},
	},
};

const Theme: React.FC = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
