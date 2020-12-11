import { DashboardButton } from 'components';
import React from 'react';

export interface ButtonsProps {}

const Buttons: React.SFC<ButtonsProps> = () => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		const target = e.target as any;
		console.log(target.dataset.id);
	};
	return (
		<div>
			<DashboardButton.Group>
				<DashboardButton id='recipe' onClick={handleClick}>
					przepis
				</DashboardButton>
				<DashboardButton id='schedule' onClick={handleClick}>
					plan
				</DashboardButton>
				<DashboardButton id='shopping' onClick={handleClick}>
					zakupy
				</DashboardButton>
			</DashboardButton.Group>
		</div>
	);
};

export default Buttons;
