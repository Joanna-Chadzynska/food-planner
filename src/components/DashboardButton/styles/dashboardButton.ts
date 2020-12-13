import styled from 'styled-components/macro';

export type ButtonProps = {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	color?: 'success' | 'info' | 'warning' | 'error';
};

export type GroupProps = {
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
};

export const Container = styled.button`
	border: 1px dashed ${({ theme }) => theme.colors.txtRow_extend};
	background-color: ${({ theme }) => theme.colors.backgroundScreens};
	padding: 1em 1.2em;
	position: relative;
`;

export const Group = styled.div<GroupProps>`
	display: flex;
	gap: 2em;
	flex-direction: ${({ direction }) => direction && direction};
`;

export const GroupWrapper = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	width: 90%;
	grid-gap: 2em;
`;

export const Icon = styled.div``;

export const Text = styled.p<ButtonProps>`
	color: ${({ theme }) => theme.colors.success};
	font-size: clamp(1rem, 5vw, 1.5rem);
	font-weight: 600;
`;

export const Close = styled.button`
	border: none;
	background-color: inherit;
	display: block;
	position: absolute;
	top: 5%;
	right: 1%;
	svg {
		font-size: 1.5rem;
	}
`;

export const Inner = styled.div<ButtonProps>`
	display: flex;
	flex-direction: ${({ direction }) => direction && direction};
	gap: 1em;
	align-items: center;

	${Text}, ${Icon} > svg, ${Close} > svg {
		color: ${({ color, theme }) => {
			switch (color) {
				case 'success':
					return `${theme.colors.success}`;
				case 'warning':
					return `${theme.colors.warning}`;
				case 'info':
					return `${theme.colors.info}`;
				case 'error':
					return `${theme.colors.trash}`;
				default:
					return `${theme.colors.txtCol_header}`;
			}
		}};
	}
`;
