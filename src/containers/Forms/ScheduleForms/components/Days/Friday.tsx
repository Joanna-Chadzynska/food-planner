import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface FridayProps {
	friday: Meal[];
}

const Friday: React.SFC<FridayProps> = ({ friday }) => {
	return (
		<Table.Row dataIdRow='friday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Piątek
			</Table.ColHeader>
			{friday.map((day) => (
				<Table.ColBody key={`friday-${day.name}`}>
					<SelectRecipe
						day='friday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Friday;
