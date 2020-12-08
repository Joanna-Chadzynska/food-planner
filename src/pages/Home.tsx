import { Footer, HeaderHome } from 'containers';
import {
	Author,
	Company,
	GoToApp,
	Jumbotron,
	Newsletter,
} from 'containers/Home';
import React from 'react';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	return (
		<>
			<HeaderHome />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Jumbotron />

			<GoToApp />

			<Company />

			<Newsletter />

			<Author />

			<Footer />
		</>
	);
};

export default Home;
