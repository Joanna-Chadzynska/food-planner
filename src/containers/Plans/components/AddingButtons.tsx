import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DashboardButton } from 'components';
import React from 'react';

export interface AddingButtonsProps {}

const AddingButtons: React.SFC<AddingButtonsProps> = () => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		const target = e.target as any;
		console.log(target.dataset.id);
	};
	return (
		<DashboardButton.Group>
			<DashboardButton
				color='success'
				direction='column'
				id='recipe'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>przepis</DashboardButton.Text>
			</DashboardButton>

			<DashboardButton
				color='success'
				direction='column'
				id='schedule'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>plan</DashboardButton.Text>
			</DashboardButton>

			<DashboardButton
				color='success'
				direction='column'
				id='shopping'
				onClick={handleClick}>
				<DashboardButton.Icon>
					<FontAwesomeIcon icon={['far', 'plus-square']} size='6x' />
				</DashboardButton.Icon>
				<DashboardButton.Text>zakupy</DashboardButton.Text>
			</DashboardButton>
		</DashboardButton.Group>
	);
};

export default AddingButtons;
