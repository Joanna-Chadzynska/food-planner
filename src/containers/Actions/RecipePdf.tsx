import {
	Document,
	Font,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer';
import { Recipe } from 'models/interfaces/Recipe';
import React, { useEffect } from 'react';

export interface RecipePdfProps {
	recipe: Recipe | undefined;
}

Font.register({
	family: 'Open Sans',
	src:
		'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400&display=swap',
	fontStyle: 'normal',
	fontWeight: 'normal',
});

const styles = StyleSheet.create({
	page: {
		margin: 30,
	},
	title: {
		fontWeight: 'black',
		marginBottom: '1cm',
		textAlign: 'center',
	},
});

const RecipePdf: React.SFC<RecipePdfProps> = ({ recipe }) => {
	const registerFont = () => {};

	useEffect(() => {
		// registerFont();
		return () => {};
	}, []);
	return (
		<Document>
			<Page wrap style={styles.page}>
				<View wrap>
					<Text style={styles.title}>{recipe?.name}</Text>
					<Text>{recipe?.description}</Text>
					<Text>
						<Text>Składniki:</Text>
						{recipe?.ingredients.map((ingredient) => (
							<Text key={ingredient}>{ingredient}</Text>
						))}
					</Text>
					<Text>
						<Text>Koki</Text>

						{recipe?.steps.map((step) => (
							<Text key={step}>{step}</Text>
						))}
					</Text>
				</View>
			</Page>
		</Document>
	);
};

export default RecipePdf;
