import { Info } from 'components';
import * as ROUTES from 'constants/routes';
import React from 'react';

const GoToApp: React.SFC = () => {
	return (
		<Info id='app' bg='dark' className='wrapper' direction='column'>
			<Info.ContentWrapper>
				<Info.Title>Sprawdź naszą aplikację</Info.Title>
				<Info.Text>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum,
					delectus.
				</Info.Text>
			</Info.ContentWrapper>

			<Info.ButtonLink
				to={
					localStorage.getItem('user')
						? ROUTES.DASHBOARD_MAIN
						: ROUTES.DASHBOARD
				}>
				Przejdź
			</Info.ButtonLink>
		</Info>
	);
};

export default GoToApp;
