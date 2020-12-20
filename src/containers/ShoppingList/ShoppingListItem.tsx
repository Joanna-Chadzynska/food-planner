import { List } from 'components';
import { Actions, ActionsExtra } from 'containers/Actions';
import { ShoppingList } from 'models/interfaces/ShopList';
import React from 'react';

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
				<Actions removeItem={() => {}} editItem={() => {}} itemId={id} />
				<ActionsExtra itemId={id} type='shopping-list' />
			</List.TableBodyCol>
		</List.TableRow>
	);
};

export default ShoppingListItem;
