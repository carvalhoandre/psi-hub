'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { OptimizedImageData } from 'components/OptimizedImage/types';

const OptimizedImage: Component<OptimizedImageData> = ({
	src,
	alt,
	testId = 'image',
	placeholderSrc = '/placeholder.png',
	className,
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div data-testid={testId}>
			{!isLoaded && (
				<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
			)}

			<Image
				src={src}
				alt={alt}
				className={`${className} transition-opacity duration-200 ${
					isLoaded ? 'opacity-100' : 'opacity-0'
				}`}
				onLoadingComplete={handleLoad}
				placeholder='blur'
				blurDataURL={placeholderSrc}
				priority
			/>
		</div>
	);
};

export default OptimizedImage;
