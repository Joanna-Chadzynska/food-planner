import { Document, Page, Text, View } from '@react-pdf/renderer';
import * as React from 'react';

export interface TestProps {
	value: string;
}
const Test: React.SFC<TestProps> = ({ value }) => {
	return (
		<Document>
			<Page wrap>
				<View>
					<Text>{value}</Text>
				</View>
			</Page>
		</Document>
	);
};

export default Test;
