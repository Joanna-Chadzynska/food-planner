import * as React from 'react';
import {
	Break,
	Column,
	Container,
	Copyright,
	Group,
	Inner,
	Link,
	List,
	Row,
	Text,
	Title,
} from './styles/footer';

export interface FooterProps {
	className?: string;
	bg?: 'dark' | 'gray';
}

export interface FooterComposition {
	Row: React.FC;
	Column: React.FC;
	Link: React.FC;
	Title: React.FC;
	Text: React.FC;
	Break: React.FC;
	Copyright: React.FC;
	Group: React.FC;
	List: React.FC;
}

const Footer: React.SFC<FooterProps> & FooterComposition = ({
	children,
	className,
	bg,
	...restProps
}) => {
	return (
		<Container bg={bg} {...restProps}>
			<Inner className={className}>{children}</Inner>
		</Container>
	);
};

export const FooterRow: React.FC = ({ children, ...restProps }) => (
	<Row {...restProps}>{children}</Row>
);

export const FooterColumn: React.FC = ({ children, ...restProps }) => (
	<Column {...restProps}>{children}</Column>
);

export const FooterLink: React.FC = ({ children, ...restProps }) => (
	<Link {...restProps}>{children}</Link>
);

export const FooterTitle: React.FC = ({ children, ...restProps }) => (
	<Title {...restProps}>{children}</Title>
);

export const FooterText: React.FC = ({ children, ...restProps }) => (
	<Text {...restProps}>{children}</Text>
);

export const FooterBreak: React.FC = ({ children, ...restProps }) => (
	<Break {...restProps} />
);

export const FooterCopyright: React.FC = ({ children, ...restProps }) => (
	<Copyright {...restProps}>{children}</Copyright>
);

export const FooterGroup: React.FC = ({ children, ...restProps }) => (
	<Group {...restProps}>{children}</Group>
);

export const FooterList: React.FC = ({ children, ...restProps }) => (
	<List {...restProps}>{children}</List>
);

Footer.Break = FooterBreak;
Footer.Column = FooterColumn;
Footer.Copyright = FooterCopyright;
Footer.Group = FooterGroup;
Footer.Link = FooterLink;
Footer.List = FooterList;
Footer.Row = FooterRow;
Footer.Text = FooterText;
Footer.Title = FooterTitle;

export default Footer;
