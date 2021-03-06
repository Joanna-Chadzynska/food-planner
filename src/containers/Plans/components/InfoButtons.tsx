import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootState } from 'app/store';
import { DashboardButton } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';

const InfoButtons: React.SFC = () => {
	const recipes = useSelector((state: RootState) => state.recipes.recipes);
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
					<FontAwesomeIcon icon={['fas', 'info-circle']} size='2x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>
					Masz już {recipes.length} przepisów, nieźle!
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
					<FontAwesomeIcon icon={['fas', 'exclamation-circle']} size='2x' />
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
					<FontAwesomeIcon icon={['fas', 'check-circle']} size='2x' />
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
