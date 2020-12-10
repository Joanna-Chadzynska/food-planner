import styled, { css } from 'styled-components/macro';

export interface InputProps {
	width?: string;
}

export const Container = styled.section`
	color: ${({ theme }) => theme.colors.sidebarNav};
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
`;

export const Title = styled.h3`
	font-size: clamp(2.5rem, 5vw, 3.5rem);
	font-weight: 600;
`;

export const SubTitle = styled.h4`
	font-size: clamp(1.75rem, 5vw, 2rem);
	font-weight: 600;
`;

export const Text = styled.p`
	font-size: clamp(1rem, 5vw, 1.4rem);
	margin-bottom: 1em;
	font-weight: 600;
	align-self: center;
	max-width: 65%;
	margin: 0 auto;
`;

export const Base = styled.form``;

export const Break = styled.div`
	margin-top: 2em;
`;

export const Fieldset = styled.fieldset``;

export const Group = styled.div`
	display: flex;
`;

export const Input = styled.input<InputProps>`
	padding: 0.5em 1.25em;
	width: ${({ width }) =>
		width &&
		css`
			${width}%
		`};
`;

export const Label = styled.label``;

export const Submit = styled.button`
	background-color: ${({ theme }) => theme.colors.btn_screens};
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-size: clamp(1rem, 5vw, 1.2rem);
	font-weight: 700;
	text-transform: uppercase;
	padding: 0.5em 1.25em;
	transition: background-color 0.2s ease-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.trash};
	}
`;
