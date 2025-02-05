import { InputProps } from '../../Input/types';

export type CmsFieldProps = Omit<InputProps, 'type'> & {
	id: string | number;
	type: 'text' | 'image';
};
