'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { OptimizedImageData } from 'components/OptimizedImage/types';

const OptimizedImage: Component<OptimizedImageData> = ({
	src,
	alt,
	className = '',
	testId = 'image',
	width,
	height,
	placeholderSrc = '/placeholder.png',
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div data-testid={testId} style={{ width, height }}>
			{!isLoaded && (
				<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
			)}

			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={`transition-opacity duration-200 ${
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
