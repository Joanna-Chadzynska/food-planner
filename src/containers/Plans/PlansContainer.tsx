import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'app/store';
import { Loading, MainApp, Table } from 'components';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Buttons, Schedule } from './components';

export interface PlansContainerProps {}

library.add(fas);

const PlansContainer: React.SFC<PlansContainerProps> = () => {
	const [index, setIndex] = useState(1);
	const { error, loading, schedules } = useSelector(
		(state: RootState) => state.schedules
	);

	if (error) return <div>Brak planów</div>;

	const next = () => {
		if (index !== schedules.length) {
			setIndex((prev) => prev + 1);
		}
	};

	const prev = () => {
		if (index > 1) {
			setIndex((prev) => prev - 1);
		}
	};

	const filteredSchedules = schedules.filter((item) => item.id === index);

	return (
		<MainApp.Group>
			<Buttons />

			<>
				{loading ? (
					<Loading.Bouncer />
				) : (
					filteredSchedules.map((schedule) =>
						schedule.id === index ? (
							<Table key={schedule.id}>
								<Schedule {...schedule} />
								<Table.ButtonsContainer>
									<Table.Button onClick={prev}>
										<FontAwesomeIcon icon={['fas', 'angle-double-left']} />
										poprzedni
									</Table.Button>
									<Table.Button onClick={next}>
										następny
										<FontAwesomeIcon icon={['fas', 'angle-double-right']} />
									</Table.Button>
								</Table.ButtonsContainer>
							</Table>
						) : null
					)
				)}
			</>
		</MainApp.Group>
	);
};

export default PlansContainer;
