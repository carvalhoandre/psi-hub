import { HTMLProps } from 'react';

export type ButtonProps = HTMLProps<HTMLButtonElement> & {
	variant?: 'outlined' | 'default' | 'link';
	type?: 'button' | 'submit' | 'reset';
};
