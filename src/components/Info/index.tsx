import React from 'react';
import {
	ButtonLink,
	Container,
	ContentWrapper,
	Image,
	Inner,
	SubTitle,
	Text,
	Title,
} from './styles/info';
import { ButtonLinkProps, ImageProps, InfoProps, TextProps } from './types';

export interface InfoComposition {
	ButtonLink: React.FC<ButtonLinkProps>;
	Image: React.FC<ImageProps>;
	Text: React.FC<TextProps>;
	SubTitle: React.FC;
	Title: React.FC;
	ContentWrapper: React.FC;
}

const Info: React.SFC<InfoProps> & InfoComposition = ({
	bg,
	id,
	direction,
	className,
	children,
	...restProps
}) => {
	return (
		<Container bg={bg} id={id} {...restProps}>
			<Inner direction={direction} className={className}>
				{children}
			</Inner>
		</Container>
	);
};

export const InfoText: React.FC<TextProps> = ({
	align,
	children,
	...restProps
}) => (
	<Text align={align} {...restProps}>
		{children}
	</Text>
);

export const InfoContentWrapper: React.FC = ({ children, ...restProps }) => (
	<ContentWrapper {...restProps}>{children}</ContentWrapper>
);

export const InfoTitle: React.FC = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

export const InfoSubTitle: React.FC = ({ children, ...restProps }) => (
	<SubTitle {...restProps}>{children}</SubTitle>
);

export const InfoButtonLink: React.FC<ButtonLinkProps> = ({
	to,
	children,
	...restProps
}) => (
	<ButtonLink to={to} {...restProps}>
		{children}
	</ButtonLink>
);

export const InfoImage: React.FC<ImageProps> = ({
	src,
	alt,
	children,
	...restProps
}) => <Image {...restProps} src={src} alt={alt} />;

Info.ContentWrapper = InfoContentWrapper;
Info.ButtonLink = InfoButtonLink;
Info.Image = InfoImage;
Info.SubTitle = InfoSubTitle;
Info.Text = InfoText;
Info.Title = InfoTitle;

export default Info;
