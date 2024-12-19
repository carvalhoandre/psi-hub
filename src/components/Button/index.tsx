import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

const Button: Component<ButtonProps> = ({
	label,
	variant = 'default',
	type = 'button',
	onClick,
	...props
}) => {
	const buttonClass = classNames(
		'w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2',
		{
			'text-white bg-primary-main hover:bg-primary-dark focus:ring-primary':
				variant === 'default',
			'text-gray-700 bg-white border border-gray-400 hover:bg-gray-100 focus:ring-gray-500':
				variant === 'outlined',
		}
	);
	return (
		<button onClick={onClick} type={type} className={buttonClass} {...props}>
			{label}
		</button>
	);
};

export default Button;
