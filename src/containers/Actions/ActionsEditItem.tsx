import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface ActionsEditItemProps {
	saveItem: () => void;
	cancelEditing: () => void;
}

const ActionsEditItem: React.SFC<ActionsEditItemProps> = ({
	saveItem,
	cancelEditing,
}) => {
	const handleItemActions = (actionType?: string) => {
		if (actionType === 'save') {
			saveItem();
		}

		if (actionType === 'cancel') {
			cancelEditing();
		}
	};
	return (
		<List.ButtonsContainer>
			<List.Button action='cancel' onClick={() => handleItemActions('cancel')}>
				<FontAwesomeIcon icon={['fas', 'times']} size='lg' />
			</List.Button>

			<List.Button action='save' onClick={() => handleItemActions('save')}>
				<FontAwesomeIcon icon={['fas', 'check']} size='lg' />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default ActionsEditItem;
