import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';
library.add(far, fas);

export interface ActionsProps {}

const Actions: React.SFC<ActionsProps> = () => {
	return (
		<List.ButtonsContainer>
			<List.Button action='edit'>
				<FontAwesomeIcon icon={['fas', 'edit']} />
			</List.Button>

			<List.Button action='delete'>
				<FontAwesomeIcon icon={['far', 'trash-alt']} />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default Actions;
