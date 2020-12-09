import { Info } from 'components';
import React from 'react';

export interface AuthorProps {}

const Author: React.SFC<AuthorProps> = () => {
	return (
		<Info
			id='about-me'
			bg='light'
			className='wrapper'
			direction='column-reverse'>
			<Info.ContentWrapper>
				<Info.Title>O autorze</Info.Title>
				<Info.Text>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
					voluptatibus impedit nostrum illum neque quidem asperiores dolor eum
					rerum eligendi aperiam consectetur distinctio voluptates deserunt ab,
					porro sequi nobis pariatur vel laboriosam dignissimos iure eaque quasi
					corrupti? Voluptatem doloremque, minima debitis, quod voluptatum
					dolorem eum ex quibusdam qui officia totam.
				</Info.Text>
			</Info.ContentWrapper>
			<Info.Image src='https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
		</Info>
	);
};

export default Author;
