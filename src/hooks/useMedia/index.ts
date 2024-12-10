'use client';
import React from 'react';

const useMedia = (media: string): boolean | null => {
	const [match, setMatch] = React.useState<boolean | null>(null);

	React.useEffect(() => {
		const mediaQueryList = window.matchMedia(media);

		const changeMatch = () => {
			setMatch(mediaQueryList.matches);
		};

		changeMatch();

		mediaQueryList.addEventListener('change', changeMatch);

		return () => {
			mediaQueryList.removeEventListener('change', changeMatch);
		};
	}, [media]);

	return match;
};

export default useMedia;
