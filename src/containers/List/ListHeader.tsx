import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { List } from 'components';
import React from 'react';

library.add(fas);

export interface TableProps {
	handleAdd?: () => void;
}

const ListHeader: React.SFC<TableProps> = ({ children, handleAdd }) => {
	return (
		<List.Header>
			<List.HeaderTitle>{children}</List.HeaderTitle>
			<List.Button onClick={handleAdd} action='add'>
				<FontAwesomeIcon icon={['fas', 'plus-square']} size='3x' />
			</List.Button>
		</List.Header>
	);
};

export default ListHeader;
