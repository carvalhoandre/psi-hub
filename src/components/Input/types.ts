import { HTMLProps } from 'react';

export type InputProps = HTMLProps<HTMLInputElement> & {
	type?: 'text' | 'password' | 'email' | 'number';
};
