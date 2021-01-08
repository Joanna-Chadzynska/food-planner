import { MainApp } from 'components';
import { DashboardStartContainer } from 'containers';
import * as React from 'react';

const DashboardStart: React.SFC = () => {
	return (
		<MainApp.Inner width='90' height='90'>
			<MainApp.Content direction='row' content='center' align='center' top='10'>
				<DashboardStartContainer />
			</MainApp.Content>
		</MainApp.Inner>
	);
};

export default DashboardStart;
