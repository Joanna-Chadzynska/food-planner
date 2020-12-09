import { createClient, Photo } from 'pexels';
import { useEffect, useState } from 'react';

const useSlider = (query: string) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('');
	const [photos, setPhotos] = useState<Photo[]>([]);
	const key: any = process.env.REACT_APP_PEXELS_API_KEY;
	const client = createClient(key);
	const orientation = 'landscape';

	const loadPhotos = async () => {
		let resp = {};
		await client.photos
			.search({ query, orientation })
			.then((photos) => (resp = photos));

		for (let [key, value] of Object.entries<any>(resp)) {
			if (key === 'photos') {
				setPhotos(value);
			}
		}
	};

	useEffect(() => {
		loadPhotos();
		return () => {
			setPhotos([]);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const slideRight = () => {
		setIndex((index + 1) % photos.length);
		setDirection('right');
	};

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			setIndex(photos.length - 1);
		} else {
			setIndex(nextIndex);
		}
		setDirection('left');
	};

	const jump = (photoIndex: number) => {
		setIndex(photoIndex);

		if (index < photoIndex) {
			setDirection('right');
		} else {
			setDirection('left');
		}
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		if (photos.length > 0) {
	// 			setIndex((prev) => prev + 1);
	// 		} else {
	// 			console.log('no photos');
	// 		}
	// 	}, 3000);
	// 	return () => clearInterval(interval);
	// }, [photos.length]);

	return {
		index,
		slideRight,
		slideLeft,
		photos,
		jump,
		direction,
	};
};

export default useSlider;
