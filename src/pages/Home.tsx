import { Footer, HeaderHome } from 'containers';
import { Author, Company, GoToApp, Newsletter, Slider } from 'containers/Home';
import React from 'react';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	return (
		<>
			<HeaderHome />
			<Slider />
			<GoToApp />
			<Company />
			<Newsletter />
			<Author />
			<Footer />
		</>
	);
};

export default Home;
