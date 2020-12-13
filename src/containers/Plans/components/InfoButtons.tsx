import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardButton } from 'components';
import React from 'react';

export interface InfoButtonsProps {}

library.add(fas);

const InfoButtons: React.SFC<InfoButtonsProps> = () => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		const target = e.target as any;
		console.log(target.dataset.id);
	};
	return (
		<DashboardButton.Group direction='column'>
			<DashboardButton
				color='info'
				direction='row'
				id='recipe-counter'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['fas', 'info-circle']} size='3x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>
					Masz już 99 przepisów, nieźle!
				</DashboardButton.Text>
				<DashboardButton.Close>
					<FontAwesomeIcon icon={['fas', 'window-close']} />
				</DashboardButton.Close>
			</DashboardButton>

			<DashboardButton
				color='warning'
				direction='row'
				id='add-plan'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['fas', 'exclamation-circle']} size='3x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>Pamiętaj, aby dodać plan!</DashboardButton.Text>
				<DashboardButton.Close>
					<FontAwesomeIcon icon={['fas', 'window-close']} />
				</DashboardButton.Close>
			</DashboardButton>

			<DashboardButton
				color='success'
				direction='row'
				id='hello'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['fas', 'check-circle']} size='3x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>
					Świetnie że jesteś! Udanego planowania i smacznego! :)
				</DashboardButton.Text>
				<DashboardButton.Close>
					<FontAwesomeIcon icon={['fas', 'window-close']} />
				</DashboardButton.Close>
			</DashboardButton>
		</DashboardButton.Group>
	);
};

export default InfoButtons;
