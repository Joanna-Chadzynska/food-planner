import { MainApp } from 'components';
import { RecipesContainer } from 'containers';
import React from 'react';

export interface RecipesProps {}

const Recipes: React.SFC<RecipesProps> = () => {
	return (
		<MainApp.Inner width='90' height='90'>
			<MainApp.Content direction='row' content='center'>
				<RecipesContainer />
			</MainApp.Content>
		</MainApp.Inner>
	);
};

export default Recipes;
