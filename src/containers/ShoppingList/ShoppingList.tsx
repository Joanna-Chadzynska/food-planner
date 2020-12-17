import { List } from 'components';
import { ListFooter, ListHeader } from 'containers/List';
import React from 'react';
import Table from './Table';

export interface ShoppingListContainerProps {}

const ShoppingListContainer: React.SFC<ShoppingListContainerProps> = () => {
	const addShoppingList = () => {
		console.log('add shopping list');
	};
	return (
		<List>
			<ListHeader handleAdd={addShoppingList}>Listy zakupów</ListHeader>
			<Table />
			<ListFooter />
		</List>
	);
};

export default ShoppingListContainer;
