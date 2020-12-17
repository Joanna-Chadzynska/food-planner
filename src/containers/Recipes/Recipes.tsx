import { List } from 'components';
import { ListFooter, ListHeader } from 'containers/List';
import React from 'react';
import { Table } from './components';
export interface RecipesContainerProps {}

const RecipesContainer: React.SFC<RecipesContainerProps> = () => {
	const addRecipe = () => {
		console.log('add recipe');
	};
	return (
		<List>
			<ListHeader handleAdd={addRecipe}>Lista przepisów</ListHeader>
			<Table />
			<ListFooter />
		</List>
	);
};

export default RecipesContainer;
