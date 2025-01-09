import { HTMLProps } from 'react';

export type InputBaseProps = HTMLProps<HTMLInputElement> & {
	type?: 'text' | 'password' | 'email' | 'number';
};

export type InputTokenProps = HTMLProps<HTMLInputElement> & {
	type: 'token';
	quantity?: number;
	value: string;
	onChangeText: (text: string) => void;
};

export type InputProps = InputBaseProps | InputTokenProps;
