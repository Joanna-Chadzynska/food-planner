import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, Info } from 'components';
import * as ROUTES from 'constants/routes';
import { HeaderHome } from 'containers';
import React, { useState } from 'react';
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	const [state, setState] = useState('');
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setState(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(state);
		setState('');
	};

	return (
		<>
			<HeaderHome />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<section>
				<div className='wrapper'>jumbotron</div>
			</section>
			<hr />
			<Info id='app' bg='dark' className='wrapper' direction='column'>
				<Info.ContentWrapper>
					<Info.Title>Sprawdź naszą aplikację</Info.Title>
					<Info.Text>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Voluptatum, delectus.
					</Info.Text>
				</Info.ContentWrapper>

				<Info.ButtonLink to={ROUTES.DASHBOARD}>Go to Dashboard</Info.ButtonLink>
			</Info>
			<Info
				id='about-company'
				bg='light'
				className='wrapper'
				direction='column'>
				<Info.ContentWrapper>
					<FontAwesomeIcon icon={faCheck} size='5x' color='#a1a194' />
					<Info.SubTitle>Lorem ipsum dolor sit amet</Info.SubTitle>
					<Info.Text align='center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
						faucibus arcu condimentum sed.
					</Info.Text>
				</Info.ContentWrapper>
				<Info.ContentWrapper>
					<FontAwesomeIcon icon={faClock} size='5x' color='#a1a194' />
					<Info.SubTitle>Lorem ipsum dolor sit amet</Info.SubTitle>
					<Info.Text align='center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
						faucibus arcu condimentum sed.
					</Info.Text>
				</Info.ContentWrapper>
				<Info.ContentWrapper>
					<FontAwesomeIcon icon={faList} size='5x' color='#a1a194' />
					<Info.SubTitle>Lorem ipsum dolor sit amet</Info.SubTitle>
					<Info.Text align='center'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
						porttitor sem. Aliquam erat volutpat. Donec placerat nisl magna, et
						faucibus arcu condimentum sed.
					</Info.Text>
				</Info.ContentWrapper>
			</Info>
			<Info bg='gray' className='wrapper' direction='column'>
				<Info.Title>Zapisz się na newsletter</Info.Title>

				<Form>
					<Form.Base onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Input value={state} onChange={handleChange} type='text' />
							<Form.Submit type='submit'>Prześlij</Form.Submit>
						</Form.Group>
					</Form.Base>
				</Form>
			</Info>
			<Info
				id='about-author'
				bg='light'
				className='wrapper'
				direction='column-reverse'>
				<Info.ContentWrapper>
					<Info.Title>O autorze</Info.Title>
					<Info.Text>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
						voluptatibus impedit nostrum illum neque quidem asperiores dolor eum
						rerum eligendi aperiam consectetur distinctio voluptates deserunt
						ab, porro sequi nobis pariatur vel laboriosam dignissimos iure eaque
						quasi corrupti? Voluptatem doloremque, minima debitis, quod
						voluptatum dolorem eum ex quibusdam qui officia totam.
					</Info.Text>
				</Info.ContentWrapper>
				<Info.Image src='https://images.pexels.com/photos/2216542/pexels-photo-2216542.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
			</Info>
			<hr />
			<footer>stopka #contact</footer>
		</>
	);
};

export default Home;
