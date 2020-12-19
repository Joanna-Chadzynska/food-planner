import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface ActionsProps {
	itemId: number | undefined;
	editItem?: any;
	removeItem: () => void;
}

const Actions: React.SFC<ActionsProps> = ({ itemId, removeItem, editItem }) => {
	const handleItemActions = (
		itemId?: number,
		actionType?: string,
		editItem?: any
	) => {
		if (actionType === 'delete') {
			console.log('delete');
			removeItem();
		}

		if (actionType === 'edit') {
			console.log('edit');
		}
		console.log({ itemId });
		window.location.reload();
	};
	return (
		<List.ButtonsContainer>
			<List.Button
				onClick={() => handleItemActions(itemId, 'edit')}
				action='edit'>
				<FontAwesomeIcon icon={['fas', 'edit']} />
			</List.Button>

			<List.Button
				onClick={() => handleItemActions(itemId, 'delete', editItem)}
				action='delete'>
				<FontAwesomeIcon icon={['far', 'trash-alt']} />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default Actions;
