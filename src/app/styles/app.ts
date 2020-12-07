import styled from 'styled-components/macro';

export const Header = styled.header`
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2);
	position: relative;

	img {
		width: 200px;
		height: auto;
	}
`;

export const Intro = styled.section`
	height: calc(100vh - 70px);
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #fbba1f;

	p {
		font-size: 4rem;
		text-align: center;
		max-width: 400px;
		font-weight: 600;
		color: #fff;
	}
`;
