import styled from 'styled-components/macro';

interface InputProps {
	width?: string;
}

export interface FieldsetProps {
	hasButton?: boolean;
}

export const Container = styled.form`
	height: 100%;
	display: grid;
	grid-template-rows: auto auto auto 1fr;
`;

export const Header = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.txtRow_extend};
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 1.2em;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.colors.btn_screens};
	font-size: clamp(1.5rem, 5vw, 2.25rem);
	font-weight: 600;
	text-transform: uppercase;
`;

export const Submit = styled.button`
	background-color: ${({ theme }) => theme.colors.btn_screens};
	border: none;
	border-radius: 5px;
	color: #ffffff;
	font-weight: 600;
	font-size: clamp(1rem, 5vw, 1.2rem);
	padding: 0.35em 0.6em;
`;

export const SubTitle = styled.h2`
	border-bottom: 2px solid ${({ theme }) => theme.colors.txtRow_extend};
	color: ${({ theme }) => theme.colors.txtCol_header};
	font-size: clamp(1.75rem, 5vw, 2rem);
	text-transform: uppercase;
	margin-bottom: 0.5em;
	align-self: start;
`;

export const Text = styled.p``;
export const Error = styled.p`
	color: ${({ theme }) => theme.colors.trash};
	font-size: 1em;
	position: absolute;
	bottom: 0;
	left: 50%;
`;

export const Input = styled.input<InputProps>`
	min-width: ${({ width }) => (width ? `${width}px` : '')};

	@media screen and(min-width: 800px) {
		width: 100%;
	}
`;

export const Textarea = styled.textarea<InputProps>`
	min-height: 75px;
	min-width: ${({ width }) => (width ? `${width}px` : '')};

	@media screen and(min-width: 800px) {
		width: 50%;
	}
`;

export const Label = styled.label`
	font-size: clamp(1.25rem, 5vw, 1.75rem);

	@media screen and (min-width: 800px) {
		/* justify-self: start; */
	}
`;

export const Button = styled.button`
	border: none;
	background-color: inherit;
	transition: transform 0.3s ease-in-out;

	@media screen and (min-width: 800px) {
		justify-self: end;
	}

	svg {
		color: ${({ theme }) => theme.colors.success};
		font-size: 2.5em;
	}

	&:hover {
		transform: scale(1.1);
	}
`;

export const OrderedList = styled.ol`
	li {
		list-style-type: decimal;
	}
`;

export const UnorderedList = styled.ul`
	li {
		list-style-type: disc;
	}
`;

export const Group = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr;
	height: 100%;

	${Input}, ${Button} {
		align-self: flex-start;
	}

	@media screen and (min-width: 800px) {
		grid-template-rows: auto 75px 1fr;
	}

	${OrderedList}, ${UnorderedList} {
		li {
			list-style-position: inside;
		}
		height: 110px;
		overflow-y: auto;
		@media screen and (min-width: 800px) {
			margin-top: 2em;
			height: 330px;
		}
	}
`;

export const GroupWrapper = styled.div`
	margin-top: 1em;
	display: grid;
	gap: 1em;

	@media screen and (min-width: 800px) {
		grid-template-columns: repeat(2, minmax(320px, 1fr));
		margin-top: 4em;
		gap: 3em;
	}
`;

export const Fieldset = styled.fieldset<FieldsetProps>`
	display: grid;
	grid-gap: 1em;
	margin-bottom: 1em;
	width: 100%;

	position: relative;

	${({ hasButton }) =>
		hasButton &&
		`
            grid-template-columns: minmax(200px, 1fr) 31px;
	    }
    `}

	${Textarea}, ${Input} {
		padding: 0.5em;
		position: relative;
	}

	@media screen and (min-width: 800px) {
		grid-template-columns: minmax(200px, auto) minmax(31px, 1fr);

		${({ hasButton }) =>
			hasButton &&
			`
            grid-template-columns: 1fr 31px;
	    }
    `}
	}
`;
