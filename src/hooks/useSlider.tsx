import { createClient, Photo } from 'pexels';
import { useCallback, useEffect, useState } from 'react';

const useSlider = (query: string) => {
	const [index, setIndex] = useState(0);
	const [direction, setDirection] = useState('');
	const [photos, setPhotos] = useState<Photo[]>([]);
	const key: any = process.env.REACT_APP_PEXELS_API_KEY;
	const client = createClient(key);
	const orientation = 'landscape';

	const loadPhotos = useCallback(async () => {
		let resp = {};
		await client.photos
			.search({ query, orientation, per_page: 5 })
			.then((photos) => (resp = photos));

		for (let [key, value] of Object.entries<any>(resp)) {
			if (key === 'photos') {
				setPhotos(value);
			}
		}
	}, [query]);

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
