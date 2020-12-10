import { Form, MainApp } from 'components';
import * as React from 'react';
export interface DashboardStartProps {}

const DashboardStart: React.SFC<DashboardStartProps> = () => {
	return (
		<MainApp.Inner width='90' height='90'>
			<MainApp.Content
				direction='row'
				content='center'
				width='50'
				align='center'
				top='10'>
				<Form>
					<Form.Title>Witaj,</Form.Title>
					<Form.Break />
					<Form.SubTitle>
						wygląda na to że jesteś tutaj pierwszy raz!{' '}
					</Form.SubTitle>
					<Form.Break />
					<Form.Base onSubmit={() => {}}>
						<Form.Input
							placeholder='tutaj wpisz jak masz na imię'
							onChange={() => {}}
							type='text'
							width='50'
						/>
						<Form.Break />
						<Form.Submit type='submit'>Gotowe!</Form.Submit>
					</Form.Base>
					<Form.Break />
					<Form.Text>
						Podaj nam swoje imię, a my zorganizujemy dla Ciebie naszą aplikację
						:)
					</Form.Text>
				</Form>
			</MainApp.Content>
		</MainApp.Inner>
	);
};

export default DashboardStart;
