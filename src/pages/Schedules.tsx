import { MainApp } from 'components';
import { SchedulesContainer } from 'containers';
import React from 'react';
export interface SchedulesProps {}

const Schedules: React.SFC<SchedulesProps> = () => {
	return (
		<MainApp.Inner width='90' height='90'>
			<MainApp.Content direction='row' content='center'>
				<SchedulesContainer />
			</MainApp.Content>
		</MainApp.Inner>
	);
};

export default Schedules;
