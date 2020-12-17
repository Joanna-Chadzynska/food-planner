import React, { createContext, useContext, useState } from 'react';
import {
	Close,
	Container,
	Group,
	GroupProps,
	GroupWrapper,
	Icon,
	Inner,
	Text,
} from './styles/dashboardButton';
import {
	ButtonProps,
	DashboardButtonComposition,
	DashboardButtonProps,
} from './types';

export interface ContextProps {
	showInfoButton?: boolean;
	setShowInfoButton?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleButtonContext = createContext<ContextProps>({});

const DashboardButton: React.SFC<DashboardButtonProps> &
	DashboardButtonComposition = ({
	direction,
	onClick,
	id,
	children,
	color,
	...restProps
}) => {
	const [showInfoButton, setShowInfoButton] = useState(true);
	return (
		<ToggleButtonContext.Provider value={{ showInfoButton, setShowInfoButton }}>
			{showInfoButton ? (
				<Container data-id={id} onClick={onClick} {...restProps}>
					<Inner color={color} direction={direction}>
						{children}
					</Inner>
				</Container>
			) : null}
		</ToggleButtonContext.Provider>
	);
};

export const DashboardButtonIcon: React.FC = ({ children, ...restProps }) => (
	<Icon {...restProps}>{children}</Icon>
);

export const DashboardButtonClose: React.FC<ButtonProps> = ({
	onClick,
	children,
	...restProps
}) => {
	const { showInfoButton, setShowInfoButton } = useContext(ToggleButtonContext);
	return (
		<Close
			onClick={() => setShowInfoButton && setShowInfoButton(!showInfoButton)}
			{...restProps}>
			{children}
		</Close>
	);
};

export const DashboardButtonGroup: React.FC<GroupProps> = ({
	direction,
	children,
	...restProps
}) => (
	<Group direction={direction} {...restProps}>
		{children}
	</Group>
);

export const DashboardButtonText: React.FC = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

export const DashboardButtonGroupWrapper: React.FC = ({
	children,
	...restProps
}) => <GroupWrapper {...restProps}>{children}</GroupWrapper>;

DashboardButton.Close = DashboardButtonClose;
DashboardButton.Group = DashboardButtonGroup;
DashboardButton.Icon = DashboardButtonIcon;
DashboardButton.Text = DashboardButtonText;
DashboardButton.GroupWrapper = DashboardButtonGroupWrapper;

export default DashboardButton;
