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
	<Bouncer {...restProps}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</Bouncer>
);
export const LoadingSpinner: React.FC = ({ ...restProps }) => (
	<Spinner {...restProps}>
		<div></div>
		<div></div>
	</Spinner>
);
export const LoadingSquare: React.FC = ({ ...restProps }) => (
	<Square {...restProps}>
		<div></div>
		<div></div>
	</Square>
);

Loading.Bouncer = LoadingBouncer;
Loading.Spinner = LoadingSpinner;
Loading.Square = LoadingSquare;

export default Loading;
