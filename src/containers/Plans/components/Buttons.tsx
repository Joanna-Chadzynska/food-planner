import { DashboardButton } from 'components';
import React from 'react';
import AddingButtons from './AddingButtons';
import InfoButtons from './InfoButtons';

const Buttons: React.SFC = () => {
	return (
		<DashboardButton.GroupWrapper>
			<AddingButtons />
			<InfoButtons />
		</DashboardButton.GroupWrapper>
	);
};

export default Buttons;
