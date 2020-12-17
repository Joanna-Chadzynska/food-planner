import { RootState } from 'app/store';
import { List, Loading } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import ScheduleDetails from './ScheduleDetails';

export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
	const { loading, error, schedules } = useSelector(
		(state: RootState) => state.schedules
	);
	return (
		<List.Table>
			<List.TableHeader>
				<List.TableRow columnsLength={5}>
					<List.TableHeaderCol>Id</List.TableHeaderCol>
					<List.TableHeaderCol>Nazwa</List.TableHeaderCol>
					<List.TableHeaderCol>opis</List.TableHeaderCol>
					<List.TableHeaderCol>Tydzień</List.TableHeaderCol>
					<List.TableHeaderCol>Akcje</List.TableHeaderCol>
				</List.TableRow>
			</List.TableHeader>

			<List.TableBody>
				{loading ? (
					<List.TableRow>
						<List.TableBodyCol>
							<Loading.Bouncer />
						</List.TableBodyCol>
					</List.TableRow>
				) : (
					schedules.map((schedule) => (
						<ScheduleDetails key={schedule.id} {...schedule} />
					))
				)}
			</List.TableBody>
		</List.Table>
	);
};

export default Table;
