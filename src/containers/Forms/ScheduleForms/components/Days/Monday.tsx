import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface MondayProps {
	monday: Meal[];
}

const Monday: React.SFC<MondayProps> = ({ monday }) => {
	return (
		<Table.Row dataIdRow='monday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Poniedziałek
			</Table.ColHeader>
			{monday.map((day) => (
				<Table.ColBody key={`monday-${day.name}`}>
					<SelectRecipe
						day='monday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Monday;
