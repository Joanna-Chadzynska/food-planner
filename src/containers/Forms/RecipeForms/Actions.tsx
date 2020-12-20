import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

export interface RecipeActionsProps {
	removeItem: () => void;
	editItem: () => void;
}

const RecipeActions: React.SFC<RecipeActionsProps> = ({
	removeItem,
	editItem,
}) => {
	const handleItemActions = (actionType: string) => {
		if (actionType === 'delete') {
			removeItem();
		}
		if (actionType === 'edit') {
			editItem();
		}
	};
	return (
		<List.ButtonsContainer>
			<List.Button onClick={() => handleItemActions('edit')} action='edit'>
				<FontAwesomeIcon icon={['fas', 'edit']} size='lg' />
			</List.Button>

			<List.Button onClick={() => handleItemActions('delete')} action='delete'>
				<FontAwesomeIcon icon={['far', 'trash-alt']} size='lg' />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default RecipeActions;
