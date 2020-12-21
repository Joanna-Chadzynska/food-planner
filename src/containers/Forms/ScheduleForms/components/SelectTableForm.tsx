import { RootState } from 'app/store';
import { Table } from 'components';
import { meals } from 'constants/schedules';
import React from 'react';
import { useSelector } from 'react-redux';
import {
	Friday,
	Monday,
	Saturday,
	Sunday,
	Thursday,
	Tuesday,
	Wednesday,
} from './Days';

export interface SelectTableFormProps {}

const SelectTableForm: React.SFC<SelectTableFormProps> = () => {
	const { schedule } = useSelector((state: RootState) => state.schedules);

	return (
		<Table>
			<Table.Inner>
				<Table.Header>
					<Table.Row dataIdRow='header'>
						<Table.ColHeader></Table.ColHeader>
						{meals.map((meal) => (
							<Table.ColHeader dataIdCol={meal.id} scope='col' key={meal.id}>
								{meal.name.toUpperCase()}
							</Table.ColHeader>
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					<Monday monday={schedule.monday} />
					<Tuesday tuesday={schedule.tuesday} />
					<Wednesday wednesday={schedule.wednesday} />
					<Thursday thursday={schedule.thursday} />
					<Friday friday={schedule.friday} />
					<Saturday saturday={schedule.saturday} />
					<Sunday sunday={schedule.sunday} />
				</Table.Body>
			</Table.Inner>
		</Table>
	);
};

export default SelectTableForm;
