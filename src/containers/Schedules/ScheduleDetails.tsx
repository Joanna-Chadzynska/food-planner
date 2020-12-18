import { List } from 'components';
import { Actions, ActionsExtra } from 'containers/Actions';
import { Schedule } from 'models/interfaces/Schedule';
import React from 'react';

const ScheduleDetails: React.SFC<Schedule> = ({
	id,
	name,
	description,
	weekNumber,
}) => {
	return (
		<List.TableRow columnsLength={5}>
			<List.TableBodyCol>{id}</List.TableBodyCol>
			<List.TableBodyCol>{name}</List.TableBodyCol>
			<List.TableBodyCol>{description}</List.TableBodyCol>
			<List.TableBodyCol>{weekNumber}</List.TableBodyCol>
			<List.TableBodyCol>
				<Actions itemId={id} />
				<ActionsExtra itemId={id} type='schedule' />
			</List.TableBodyCol>
		</List.TableRow>
	);
};

export default ScheduleDetails;
