import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface ThursdayProps {
	thursday: Meal[];
}

const Thursday: React.SFC<ThursdayProps> = ({ thursday }) => {
	return (
		<Table.Row dataIdRow='thursday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Czwartek
			</Table.ColHeader>
			{thursday.map((day) => (
				<Table.ColBody key={`thursday-${day.name}`}>
					<SelectRecipe
						day='thursday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Thursday;
