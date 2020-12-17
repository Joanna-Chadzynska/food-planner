import { List } from 'components';
import { Actions, ActionsExtra } from 'containers/Actions';
import { ShoppingList } from 'models/interfaces/ShopList';
import React from 'react';

export interface ShoppingListItemProps {}

const ShoppingListItem: React.SFC<ShoppingList> = ({ id, name, list }) => {
	return (
		<List.TableRow columnsLength={4}>
			<List.TableBodyCol>{id}</List.TableBodyCol>
			<List.TableBodyCol>{name}</List.TableBodyCol>
			<List.TableBodyCol>
				{list.map((item) => (
					<p key={item.id}>{item.name}</p>
				))}
			</List.TableBodyCol>
			<List.TableBodyCol>
				<Actions />
				<ActionsExtra />
			</List.TableBodyCol>
		</List.TableRow>
	);
};

export default ShoppingListItem;
