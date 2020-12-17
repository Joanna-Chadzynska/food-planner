import { List } from 'components';
import { ActionsExtra } from 'containers/Actions';
import React from 'react';

export interface ListFooterProps {}

const ListFooter: React.SFC<ListFooterProps> = () => {
	return (
		<List.TableFooter>
			<ActionsExtra />
		</List.TableFooter>
	);
};

export default ListFooter;
