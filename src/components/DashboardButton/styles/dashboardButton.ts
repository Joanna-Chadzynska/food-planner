import styled from 'styled-components/macro';

export const Container = styled.button`
	border: 1px dashed ${({ theme }) => theme.colors.txtRow_extend};
	background-color: ${({ theme }) => theme.colors.backgroundScreens};
	padding: 3em 1em;
`;

export const Group = styled.div`
	display: flex;
	gap: 3em;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export const Icon = styled.div``;

export const Text = styled.p`
	color: ${({ theme }) => theme.colors.success};
	font-size: clamp(1rem, 5vw, 1.5rem);
	font-weight: 600;
`;
