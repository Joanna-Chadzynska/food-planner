import React from 'react';
import { Container } from './styles/mainApp';

export interface MainAppProps {}

const MainApp: React.SFC<MainAppProps> = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

export default MainApp;
