import { StaticImageData } from 'next/image';

export type OptimizedImageData = {
	src: string | StaticImageData;
	alt: string;
	width: number;
	height: number;
	className?: string;
	placeholderSrc?: string;
};
