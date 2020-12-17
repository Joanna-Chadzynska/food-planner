import { List } from 'components';
import { ListFooter, ListHeader } from 'containers/List';
import * as React from 'react';
import Table from './Table';

export interface SchedulesContainerProps {}

const SchedulesContainer: React.SFC<SchedulesContainerProps> = () => {
	const addSchedule = () => {
		console.log('add schedule');
	};
	return (
		<List>
			<ListHeader handleAdd={addSchedule}>Lista planów</ListHeader>
			<Table />
			<ListFooter />
		</List>
	);
};

export default SchedulesContainer;
