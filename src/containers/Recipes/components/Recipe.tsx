import { List } from 'components';
import { Actions, ActionsExtra } from 'containers/Actions';
import EditRecipe from 'containers/Forms/RecipeForms/EditRecipe';
import { useModalContext } from 'contexts/ModalContext';
import { useHttpClient } from 'hooks';
import { Recipe } from 'models/interfaces/Recipe';
import React from 'react';

const RecipeDetails: React.SFC<Recipe> = ({ id, name, description }) => {
	const client = useHttpClient();
	const { handleModal } = useModalContext();

	return (
		<List.TableRow columnsLength={4}>
			<List.TableBodyCol>{id}</List.TableBodyCol>
			<List.TableBodyCol>{name}</List.TableBodyCol>
			<List.TableBodyCol>{description}</List.TableBodyCol>
			<List.TableBodyCol>
				<Actions
					removeItem={() => client.removeRecipe(id)}
					editItem={() => handleModal(<EditRecipe id={id} />)}
					itemId={id}
				/>
				<ActionsExtra itemId={id} type='recipe' />
			</List.TableBodyCol>
		</List.TableRow>
	);
};

export default RecipeDetails;
