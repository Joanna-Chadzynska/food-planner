import styled, { keyframes } from 'styled-components/macro';

const spinnerOne = keyframes`
    0% {
        transform: rotate(0deg);
        border-width: 10px;
    }

    50% {
        transform: rotate(180deg);
        border-width: 1px;
    }

    100% {
        transform: rotate(360deg);
        border-width: 10px;
    }
`;

const spinnerTwo = keyframes`
    0% {
        transform: rotate(0deg);
        border-width: 1px;
    }

    50% {
        transform: rotate(180deg);
        border-width: 10px;
    }

    100% {
        transform: rotate(360deg);
        border-width: 1px;
    }
`;

const bouncer = keyframes`
    from {
        transform: translateY(0)
    }

    to { transform: translateY(-100px)}
`;

const flip = keyframes`
    0% {
        transform: rotateX(0) rotateY(0);
    }
    25% {
        transform: rotateX(0) rotateY(180deg);
    }
    50% {
        transform: rotateX(180deg) rotateY(180deg);
    }
    75% {
        transform: rotateX(180deg) rotateY(0);
    }
    100% {
        transform: rotateX(0) rotateY(0);
    }


`;

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Bouncer = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: flex-end;
	width: 100px;
	height: 100px;

	div {
		animation: ${bouncer} 0.5s cubic-bezier(0.19, 0.57, 0.3, 0.98) infinite
			alternate;
		background-color: ${({ theme }) => theme.colors.info};
		border-radius: 50%;
		width: 20px;
		height: 20px;
	}

	div:nth-child(2) {
		animation-delay: 0.1s;
		opacity: 0.8;
	}

	div:nth-child(3) {
		animation-delay: 0.2s;
		opacity: 0.6;
	}

	div:nth-child(4) {
		animation-delay: 0.3s;
		opacity: 0.4;
	}
`;

export const Spinner = styled.div`
	width: 100px;
	height: 100px;
	position: relative;

	div {
		animation: ${spinnerOne} 1.2s linear infinite;
		border: 10px solid transparent;
		border-radius: 50%;
		border-top-color: #ad60f5;
		box-sizing: border-box;
		position: absolute;
		width: 100%;
		height: 100%;
	}

	div:nth-child(2) {
		animation: ${spinnerTwo} 1.2s linear infinite;
		border: 10px solid transparent;
		border-bottom-color: #ad60f5;
	}
`;

export const Square = styled.div`
	width: 100px;
	height: 100px;
	position: relative;
	perspective: 200px;

	div {
		animation: ${flip} 2s linear infinite;
		background-color: ${({ theme }) => theme.colors.success};
		position: absolute;
		top: 0;
		height: 50px;
		width: 50px;
		transform-origin: right bottom;
	}

	div:nth-child(2) {
		animation-delay: 1s;
		opacity: 0.5;
	}
`;
