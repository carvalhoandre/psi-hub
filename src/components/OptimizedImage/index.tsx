'use client';

import React, { useState } from 'react';
import classNames from 'classnames';

import Image from 'next/image';

import { OptimizedImageData } from 'components/OptimizedImage/types';

const OptimizedImage: Component<OptimizedImageData> = ({
	src,
	alt,
	testId = 'image',
	width,
	height,
	placeholderSrc = '/placeholder.png',
	className,
	...props
}) => {
	const [isLoaded, setIsLoaded] = useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div data-testid={testId} style={{ width, height }} className='relative'>
			{!isLoaded && (
				<div className='absolute inset-0 bg-gray-200 animate-pulse'></div>
			)}

			<Image
				src={src}
				alt={alt}
				width={width}
				height={height}
				className={classNames(className, 'transition-opacity duration-200', {
					'opacity-100': isLoaded,
					'opacity-0': !isLoaded,
				})}
				onLoad={handleLoad}
				placeholder='blur'
				blurDataURL={placeholderSrc}
				{...props}
			/>
		</div>
	);
};

export default OptimizedImage;
