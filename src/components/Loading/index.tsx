import React from 'react';
import { Bouncer, Container, Spinner, Square } from './styles/loading';

export interface LoadingComposition {
	Bouncer: React.FC;
	Spinner: React.FC;
	Square: React.FC;
}

const Loading: React.SFC & LoadingComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const LoadingBouncer: React.FC = ({ ...restProps }) => (
	<Container>
		<Bouncer {...restProps}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</Bouncer>
	</Container>
);
export const LoadingSpinner: React.FC = ({ ...restProps }) => (
	<Container>
		<Spinner {...restProps}>
			<div></div>
			<div></div>
		</Spinner>
	</Container>
);
export const LoadingSquare: React.FC = ({ ...restProps }) => (
	<Container>
		<Square {...restProps}>
			<div></div>
			<div></div>
		</Square>
	</Container>
);

Loading.Bouncer = LoadingBouncer;
Loading.Spinner = LoadingSpinner;
Loading.Square = LoadingSquare;

export default Loading;
