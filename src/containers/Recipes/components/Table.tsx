import { RootState } from 'app/store';
import { List, Loading } from 'components';
import React from 'react';
import { useSelector } from 'react-redux';
import RecipeDetails from './Recipe';

export interface TableProps {}

const Table: React.SFC<TableProps> = () => {
	const { recipes, error, loading } = useSelector(
		(state: RootState) => state.recipes
	);

	return (
		<List.Table>
			<List.TableHeader>
				<List.TableRow columnsLength={4}>
					<List.TableHeaderCol>Id</List.TableHeaderCol>
					<List.TableHeaderCol>Nazwa</List.TableHeaderCol>
					<List.TableHeaderCol>opis</List.TableHeaderCol>
					<List.TableHeaderCol>Akcje</List.TableHeaderCol>
				</List.TableRow>
			</List.TableHeader>

			<List.TableBody>
				{loading ? (
					<Loading.Bouncer />
				) : (
					recipes.map((recipe) => <RecipeDetails key={recipe.id} {...recipe} />)
				)}
			</List.TableBody>
		</List.Table>
	);
};

export default Table;
