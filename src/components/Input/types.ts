import { HTMLProps } from 'react';

export type InputBaseProps = HTMLProps<HTMLInputElement> & {
	type?: 'text' | 'password' | 'email' | 'number';
	validateError?: (value: string) => string;
	mask?: (value?: string) => string;
	onChangeText?: (text: string) => void;
	onValidate?: (hasError: boolean) => void;
};

export type InputTokenProps = Omit<
	InputBaseProps,
	'type' | 'validateError' | 'mask'
> & {
	type: 'token';
	quantity?: number;
	value: string;
};

export type InputProps = InputBaseProps | InputTokenProps;
