import { RootState } from 'app/store';
import { List, Loading } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingListItem from './ShoppingListItem';

export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
	const { loading, shoppingLists } = useSelector(
		(state: RootState) => state.shoppingLists
	);
	return (
		<List.Table>
			<List.TableHeader>
				<List.TableRow columnsLength={4}>
					<List.TableHeaderCol>Id</List.TableHeaderCol>
					<List.TableHeaderCol>Nazwa</List.TableHeaderCol>
					<List.TableHeaderCol>Produkty</List.TableHeaderCol>
					<List.TableHeaderCol>Akcje</List.TableHeaderCol>
				</List.TableRow>
			</List.TableHeader>

			<List.TableBody>
				{loading ? (
					<List.TableRow>
						<List.TableBodyCol>
							<Loading.Bouncer />
						</List.TableBodyCol>
					</List.TableRow>
				) : (
					shoppingLists.map((list) => (
						<ShoppingListItem key={list.id} {...list} />
					))
				)}
			</List.TableBody>
		</List.Table>
	);
};

export default Table;
