import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Group, Icon, Inner, Text } from './styles/dashboardButton';

export interface DashboardButtonProps {
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	id: string;
}

export interface DashboardButtonComposition {
	Group: React.FC;
}

library.add(far);

const DashboardButton: React.SFC<DashboardButtonProps> &
	DashboardButtonComposition = ({ onClick, id, children, ...restProps }) => {
	return (
		<Container data-id={id} onClick={onClick} {...restProps}>
			<Inner>
				<Icon>
					<FontAwesomeIcon
						icon={['far', 'plus-square']}
						size='6x'
						color='#468966'
					/>
				</Icon>
				<Text>{children}</Text>
			</Inner>
		</Container>
	);
};

export const DashboardButtonGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

DashboardButton.Group = DashboardButtonGroup;

export default DashboardButton;
