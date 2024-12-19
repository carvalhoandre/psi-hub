import { HTMLProps } from 'react';

export type PasswordInputProps = HTMLProps<HTMLInputElement> & {
	showPassword?: boolean;
	togglePasswordVisibility?: () => void;
};
