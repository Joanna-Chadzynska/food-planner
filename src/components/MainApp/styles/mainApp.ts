import styled from 'styled-components/macro';

export const Container = styled.article`
	background-image: url('https://trello-attachments.s3.amazonaws.com/5d78d22236ac1e52efe3c181/5d78d22236ac1e52efe3c1f4/500x500/6bcde9e9d7f8f1d3df331c5bcd9b2a4a/image.png');
	background-size: contain;
	min-height: calc(100vh - 250px + 100px);
	@media screen and (min-width: 800px) {
		margin-top: 0;
		min-height: calc(100vh - 250px);
	}
`;
