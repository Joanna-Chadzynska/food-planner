import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface ActionsProps {
	itemId: number;
	callback?: () => void;
	edit?: () => void;
	delete?: () => void;
}

const Actions: React.SFC<ActionsProps> = ({ itemId, callback }) => {
	const handleItemActions = (
		itemId: number,
		actionType: string,
		callback?: () => void
	) => {
		console.log({ itemId });
		console.log({ actionType });
	};
	return (
		<List.ButtonsContainer>
			<List.Button
				onClick={() => handleItemActions(itemId, 'edit', callback)}
				action='edit'>
				<FontAwesomeIcon icon={['fas', 'edit']} />
			</List.Button>

			<List.Button
				onClick={() => handleItemActions(itemId, 'delete', callback)}
				action='delete'>
				<FontAwesomeIcon icon={['far', 'trash-alt']} />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default Actions;
