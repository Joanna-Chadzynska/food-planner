import styled, { keyframes } from 'styled-components/macro';

export const Slide = keyframes`
    from {
        transform: translateX(0)
    }

    to
    { 
        transform: translateX(-100%);
    }

`;
export type NavButtonProps = {
	isCurrent?: boolean;
};

export type ImageProps = {
	direction?: string;
	current?: number;
};

export const Container = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: space-evenly;
	margin-bottom: 1em;
	margin-top: clamp(3em, 40vw, 6em);
	position: relative;

	@media (min-width: 800px) {
		margin-top: 0;
	}
`;

export const Button = styled.button`
	border: none;
	background-color: inherit;
	align-self: center;
`;

export const Image = styled.div<ImageProps>`
	transition: transform 0.3s ease-in-out;
	/* transform: ${({ direction }) =>
		direction === 'left' ? 'translateX(-50%)' : 'translateX(50%)'}; */
	padding: 10px;
	/* animation: ${Slide} 3s ease-in-out; */
	img {
	}
`;

export const Nav = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 1em;
	margin-bottom: 1em;
`;

export const NavButton = styled.button<NavButtonProps>`
	background-color: ${({ isCurrent }) =>
		isCurrent ? 'rgba(0, 0, 0, 0.75)' : 'rgba(0, 0, 0, 0.3)'};
	border: 0;
	border-radius: 50%;
	width: 15px;
	height: 15px;
`;
