import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BlobProvider } from '@react-pdf/renderer';
import { List } from 'components';
import useHttpClient from 'hooks/useHttpClient';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useCallback, useEffect, useState } from 'react';
import RecipePdf from './RecipePdf';
import Test from './Test';

export interface ActionsExtraProps {
	itemId?: number;
	type?: string;
}

const ActionsExtra: React.SFC<ActionsExtraProps> = ({ itemId, type }) => {
	const [recipe, setRecipe] = useState<Recipe>();
	const client = useHttpClient();

	const handleExtraAction = (actionType: string) => {};

	const openPdf = (url: any) => {
		window.open(url, '_blank');
	};

	const fetchItemDetails = useCallback(
		async (id: any, type: string | undefined): Promise<void> => {
			if (type === 'recipe') {
				const resp = await client.getRecipeById(id);
				setRecipe(resp);
			}
		},
		[]
	);

	useEffect(() => {
		fetchItemDetails(itemId, type);
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [itemId]);

	return (
		<List.ButtonsContainer>
			<List.Button onClick={() => handleExtraAction('copy')} action='copy'>
				<FontAwesomeIcon icon={['far', 'clone']} />
			</List.Button>

			<BlobProvider
				document={
					type === 'recipe' ? (
						<RecipePdf recipe={recipe} />
					) : (
						<Test value={'jolo'} />
					)
				}>
				{({ url }) => (
					<List.Button onClick={() => openPdf(url)} action='pdf'>
						<FontAwesomeIcon icon={['far', 'file-pdf']} />
					</List.Button>
				)}
			</BlobProvider>

			<List.Button onClick={() => handleExtraAction('print')} action='print'>
				<FontAwesomeIcon icon={['fas', 'print']} />
			</List.Button>
		</List.ButtonsContainer>
	);
};

export default ActionsExtra;
