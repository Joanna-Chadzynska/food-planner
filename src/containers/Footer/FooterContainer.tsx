import {
	faFacebookSquare,
	faInstagram,
	faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Footer, Form } from 'components';
import * as React from 'react';
export interface FooterContainerProps {}

const FooterContainer: React.SFC<FooterContainerProps> = () => {
	return (
		<>
			<Footer className='wrapper' bg='gray'>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title>Lorem ipsum dolor</Footer.Title>
						<Footer.Text>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							at porttitor sem. Aliquam erat volutpat. Donec placerat nisl
							magna.
						</Footer.Text>
					</Footer.Column>

					<Footer.Column>
						<Footer.Title>Lorem ipsum dolor</Footer.Title>

						<Footer.List>
							<li>consectetur adipiscing elit</li>
							<li>sed do eiusmod tempor</li>
							<li>incididunt ut labore</li>
							<li>et dolore magna aliqua</li>
						</Footer.List>
					</Footer.Column>

					<Footer.Column>
						<Footer.Title>Lorem ipsum dolor</Footer.Title>

						<Form>
							<Form.Base onSubmit={() => {}}>
								<Form.Group>
									<Form.Input type='text' onChange={() => {}} />
									<Form.Submit type='submit'>Prześlij</Form.Submit>
								</Form.Group>
							</Form.Base>
						</Form>

						<Footer.Group>
							<Footer.Link>
								<FontAwesomeIcon icon={faFacebookSquare} size='3x' />
							</Footer.Link>
							<Footer.Link>
								<FontAwesomeIcon icon={faTwitterSquare} size='3x' />
							</Footer.Link>
							<Footer.Link>
								<FontAwesomeIcon icon={faInstagram} size='3x' />
							</Footer.Link>
						</Footer.Group>
					</Footer.Column>
				</Footer.Row>
			</Footer>
			<Footer bg='dark' className='wrapper'>
				<Footer.Copyright>
					<span>Copyright</span>
					<span>ZaplanujJedzonko.pl</span>
				</Footer.Copyright>
			</Footer>
		</>
	);
};

export default FooterContainer;
