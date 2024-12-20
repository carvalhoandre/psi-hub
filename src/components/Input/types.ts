import { HTMLProps } from 'react';

export type InputCodeProps = HTMLProps<HTMLInputElement> & {
	quantity?: number;
};

export type InputProps = InputCodeProps & {
	type?: 'text' | 'password' | 'email' | 'number' | 'code';
};
