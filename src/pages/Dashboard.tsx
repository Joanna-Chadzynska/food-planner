import { HeaderDashboard, MainApp, Sidebar } from 'containers';
import React from 'react';
import { useHistory } from 'react-router-dom';

export interface DashboardProps {}

const Dashboard: React.SFC<DashboardProps> = () => {
	const history = useHistory();
	const goBack = () => {
		history.goBack();
	};
	return (
		<>
			<HeaderDashboard />
			<main className='layout'>
				<Sidebar />
				<MainApp />
			</main>
		</>
	);
};

export default Dashboard;
