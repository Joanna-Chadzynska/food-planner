import styled from 'styled-components/macro';

export const Container = styled.aside`
	/* height: calc(100vh - 81px);
     */
	height: 100%;
	background-color: red;
	margin-top: clamp(60px, 5vw, 81px);
	@media screen and (min-width: 800px) {
		margin-top: 0;
	}
`;
