import { Table } from 'components';
import { Meal } from 'models/interfaces/Schedule';
import React from 'react';
import SelectRecipe from './SelectRecipe';

export interface SundayProps {
	sunday: Meal[];
}

const Sunday: React.SFC<SundayProps> = ({ sunday }) => {
	return (
		<Table.Row dataIdRow='sunday'>
			<Table.ColHeader dataIdCol='day' scope='row'>
				Niedziela
			</Table.ColHeader>
			{sunday.map((day) => (
				<Table.ColBody key={`sunday-${day.name}`}>
					<SelectRecipe
						day='sunday'
						meal={day.name}
						dayRecipeId={day.recipeId}
					/>
				</Table.ColBody>
			))}
		</Table.Row>
	);
};

export default Sunday;
