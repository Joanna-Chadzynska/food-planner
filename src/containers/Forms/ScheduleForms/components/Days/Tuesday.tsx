import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface TuesdayProps {
	tuesday: Meal[];
}

const Tuesday: React.SFC<TuesdayProps> = ({ tuesday }) => {
	return (
		<Table.Row dataIdRow='tuesday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Wtorek
			</Table.ColHeader>
			{tuesday.map((day) => (
				<Table.ColBody key={`tuesday-${day.name}`}>
					<SelectRecipe
						day='tuesday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Tuesday;
