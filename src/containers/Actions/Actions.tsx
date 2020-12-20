import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface ActionsProps {
	itemId: number | undefined;
	editItem: () => void;
	removeItem: () => void;
}

const Actions: React.SFC<ActionsProps> = ({ itemId, removeItem, editItem }) => {
	const handleItemActions = (actionType?: string) => {
		if (actionType === 'delete') {
			removeItem();
			window.location.reload();
		}

		if (actionType === 'edit') {
			editItem();
		}
	};
	return (
		<List.ButtonsContainer>
			<List.Button onClick={() => handleItemActions('edit')} action='edit'>
				<FontAwesomeIcon icon={['fas', 'edit']} size='2x' />
			</List.Button>

			<List.Button onClick={() => handleItemActions('delete')} action='delete'>
				<FontAwesomeIcon icon={['far', 'trash-alt']} size='2x' />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default Actions;
