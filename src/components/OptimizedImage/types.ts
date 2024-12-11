import { ImageProps } from 'next/image';

export type OptimizedImageData = {
	placeholderSrc?: string;
} & ImageProps;
