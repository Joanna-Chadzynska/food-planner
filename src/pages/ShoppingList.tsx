import { MainApp } from 'components';
import { ShoppingListContainer } from 'containers';
import React from 'react';

export interface ShoppingListProps {}

const ShoppingList: React.SFC<ShoppingListProps> = () => {
	return (
		<MainApp.Inner width='90' height='90'>
			<MainApp.Content direction='row' content='center'>
				<ShoppingListContainer />
			</MainApp.Content>
		</MainApp.Inner>
	);
};

export default ShoppingList;
