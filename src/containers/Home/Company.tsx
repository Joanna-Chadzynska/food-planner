import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Info } from 'components';
import React from 'react';

const Company: React.SFC = () => {
	return (
		<Info id='about-company' bg='light' className='wrapper' direction='column'>
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
	);
};

export default Company;
