import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface ActionsExtraProps {}
library.add(far, fas);

const ActionsExtra: React.SFC<ActionsExtraProps> = () => {
	return (
		<List.ButtonsContainer>
			<List.Button action='copy'>
				<FontAwesomeIcon icon={['far', 'clone']} />
			</List.Button>

			<List.Button action='pdf'>
				<FontAwesomeIcon icon={['far', 'file-pdf']} />
			</List.Button>

			<List.Button action='print'>
				<FontAwesomeIcon icon={['fas', 'print']} />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default ActionsExtra;
