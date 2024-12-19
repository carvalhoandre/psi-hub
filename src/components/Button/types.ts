import { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
	variant?: 'outlined' | 'default';
	type?: 'button' | 'submit' | 'reset';
};
