import { StaticImageData } from 'next/image';

export type OptimizedImageData = {
	src: string | StaticImageData;
	alt: string;
	placeholderSrc?: string;
};
