import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface SaturdayProps {
	saturday: Meal[];
}

const Saturday: React.SFC<SaturdayProps> = ({ saturday }) => {
	return (
		<Table.Row dataIdRow='saturday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Sobota
			</Table.ColHeader>
			{saturday.map((day) => (
				<Table.ColBody key={`saturday-${day.name}`}>
					<SelectRecipe
						day='saturday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Saturday;
