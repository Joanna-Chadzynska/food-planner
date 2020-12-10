import { HeaderDashboard, MainApp, Sidebar } from 'containers';
import React from 'react';

const Dashboard: React.SFC = () => {
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
