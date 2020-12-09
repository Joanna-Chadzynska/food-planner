import React from 'react';
import { Button, Container, Image, Nav, NavButton } from './styles/slider';
import { ButtonProps, ImageProps } from './types';

export interface SliderProps {}

export interface SliderComposition {
	Button: React.FC<ButtonProps>;
	Image: React.FC<ImageProps>;
	Nav: React.FC;
	NavButton: React.FC<ButtonProps>;
}

const Slider: React.SFC<SliderProps> & SliderComposition = ({
	children,
	...restProps
}) => {
	return <Container {...restProps}>{children}</Container>;
};

export const SliderButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	disabled,
	...restProps
}) => (
	<Button onClick={onClick} disabled={disabled} {...restProps}>
		{children}
	</Button>
);

export const SliderImage: React.FC<ImageProps> = ({
	alt,
	src,
	current,
	direction,
	...restProps
}) => (
	<Image direction={direction} current={current} {...restProps}>
		<img alt={alt} src={src} />
	</Image>
);

export const SliderNav: React.FC = ({ children, ...restProps }) => (
	<Nav {...restProps}>{children}</Nav>
);

export const SliderNavButton: React.FC<ButtonProps> = ({
	children,
	onClick,
	isCurrent,

	...restProps
}) => (
	<NavButton isCurrent={isCurrent} onClick={onClick} {...restProps}>
		{children}
	</NavButton>
);

Slider.Button = SliderButton;
Slider.Image = SliderImage;
Slider.Nav = SliderNav;
Slider.NavButton = SliderNavButton;

export default Slider;
