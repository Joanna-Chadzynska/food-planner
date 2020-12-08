import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

type ContainerProps = {
	bg?: 'dark' | 'light' | 'gray';
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};

type TextProps = {
	align?: 'center' | 'left' | 'right' | 'justify';
};

export const Container = styled.section<ContainerProps>`
	${({ bg, theme }) =>
		bg === 'dark'
			? `
            background-color: ${theme.colors.txtCol_header};
            color: #ffffff;
        `
			: ` background-color: '#EBEBEB'
                color: #000000;
            `};

	${({ bg, theme }) => {
		switch (bg) {
			case 'dark':
				return `
                background-color: ${theme.colors.txtCol_header};
                color: #ffffff;
            `;
			case 'gray':
				return `
                background-color: ${theme.colors.sidebarNav};
                color: #ffffff;
            `;
			case 'light':
			default:
				return `
                background-color: '#EBEBEB'
                color: #000000;
            `;
		}
	}};
	line-height: 1.6;
	padding: 2em 0;
`;

export const ContentWrapper = styled.div<ContainerProps>`
	display: flex;
	flex-direction: column;
	gap: 2em;
	width: 100%;

	svg {
		margin: 0 auto;
	}

	@media (min-width: 800px) {
		width: 55%;
	}
`;

export const Inner = styled.div<ContainerProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1em;
	flex-direction: ${({ direction }) =>
		direction === 'column-reverse' ? 'column' : direction};

	@media (min-width: 800px) {
		${ContentWrapper} + ${ContentWrapper} {
			margin-left: 60px;
		}
		width: 100%;
		${({ direction }) => {
			switch (direction) {
				case 'row':
					return `
                flex-direction: column;
            `;
				case 'row-reverse':
					return `
                flex-direction: column-reverse;
            `;
				case 'column':
					return `
                flex-direction:row;
            `;
				case 'column-reverse':
					return `
                flex-direction: row-reverse;
            `;
				default:
					return `
                flex-direction: row;
            `;
			}
		}};
	}
`;

export const Title = styled.h3`
	font-size: clamp(2.5rem, 5vw, 3.5rem);
	font-weight: 600;
`;

export const SubTitle = styled.h4`
	color: ${({ theme }) => theme.colors.txtCol_header};
	font-size: clamp(1.875rem, 5vw, 2.35rem);
	font-weight: 600;
	text-align: center;

	@media (min-width: 800px) {
		margin: 0 1.25em;
	}
`;

export const Text = styled.p<TextProps>`
	font-size: clamp(1rem, 5vw, 1.4rem);
	margin-bottom: 1em;
	text-align: ${({ align }) => align};
`;

export const ButtonLink = styled(Link)<ContainerProps>`
	align-self: center;
	background-color: ${({ theme }) => theme.colors.btn_screens};
	border-radius: 5px;
	color: #ffffff;
	font-size: clamp(1rem, 5vw, 1.2rem);
	font-weight: 700;
	text-transform: uppercase;
	padding: 0.75em 1.25em;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.2s ease-out;

	&:hover {
		background-color: ${({ theme }) => theme.colors.trash};
	}
`;

export const Image = styled.img`
	align-self: flex-start;
	width: 100%;
	@media (min-width: 800px) {
		max-width: 400px;
		width: 50%;
	}
`;
