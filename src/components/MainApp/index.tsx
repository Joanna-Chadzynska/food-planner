import React from 'react';
import { Container, Content, Group, Inner } from './styles/mainApp';

export interface MainAppProps {}
export interface InnerProps {
	width?: string;
	height?: string;
	direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
	content?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'baseline';
	align?:
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'stretch'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
		| 'baseline';
	top?: string;
}

export interface MainAppComposition {
	Inner: React.FC<InnerProps>;
	Content: React.FC<InnerProps>;
	Group: React.FC;
}

const MainApp: React.SFC<MainAppProps> & MainAppComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const MainAppInner: React.FC<InnerProps> = ({
	children,
	width,
	height,
	...restProps
}) => (
	<Inner width={width} height={height} {...restProps}>
		{children}
	</Inner>
);

export const MainAppContent: React.FC<InnerProps> = ({
	children,
	width,
	height,
	direction,
	content,
	align,
	top,
	...restProps
}) => (
	<Content
		width={width}
		height={height}
		content={content}
		direction={direction}
		align={align}
		top={top}
		{...restProps}>
		{children}
	</Content>
);

export const MainAppGroup: React.FC = ({
	children,

	...restProps
}) => <Group {...restProps}>{children}</Group>;

MainApp.Inner = MainAppInner;
MainApp.Content = MainAppContent;
MainApp.Group = MainAppGroup;

export default MainApp;
