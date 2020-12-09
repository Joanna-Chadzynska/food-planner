import { createClient, Photo } from 'pexels';
import { useEffect, useState } from 'react';

const useSlider = (query: string) => {
	const [index, setIndex] = useState(0);
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
	}, []);

	const slideRight = () => {
		setIndex((index + 1) % photos.length);
	};

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			setIndex(photos.length - 1);
		} else {
			setIndex(nextIndex);
		}
	};

	return {
		index,
		slideRight,
		slideLeft,
		photos,
	};
};

export default useSlider;
