import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface WednesdayProps {
	wednesday: Meal[];
}

const Wednesday: React.SFC<WednesdayProps> = ({ wednesday }) => {
	return (
		<Table.Row dataIdRow='wednesday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Środa
			</Table.ColHeader>
			{wednesday.map((day) => (
				<Table.ColBody key={`wednesday-${day.name}`}>
					<SelectRecipe
						day='wednesday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Wednesday;
