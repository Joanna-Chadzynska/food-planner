import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Slider } from 'components';
import React from 'react';
import useSlider from '../../hooks/useSlider';

export interface JumbotronProps {}

const SliderContainer: React.SFC<JumbotronProps> = () => {
	const { photos, slideLeft, slideRight, index, jump, direction } = useSlider(
		'cooking'
	);

	const photosNumArray = [...Array(photos.length).keys()];

	return (
		<>
			{photos.length > 0 && (
				<>
					<Slider>
						<Slider.Button onClick={slideLeft}>
							<FontAwesomeIcon icon={faChevronLeft} size='3x' />
						</Slider.Button>

						<Slider.Image
							direction={direction}
							current={index}
							src={photos[index].src.landscape}
							alt='cooking'
						/>

						<Slider.Button onClick={slideRight}>
							<FontAwesomeIcon icon={faChevronRight} size='3x' />
						</Slider.Button>
					</Slider>
					<Slider.Nav>
						{photosNumArray.map((item) => (
							<Slider.NavButton
								isCurrent={item === index}
								onClick={() => jump(item)}
								key={item}></Slider.NavButton>
						))}
					</Slider.Nav>
				</>
			)}
		</>
	);
};

export default SliderContainer;
