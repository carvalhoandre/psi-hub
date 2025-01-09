import React from 'react';
import classNames from 'classnames';

import { ButtonProps } from './types';

const Button: Component<ButtonProps> = ({
	label,
	variant = 'default',
	type = 'button',
	onClick,
	className,
	...props
}) => {
	const buttonClass = classNames(
		'w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer transition-all',
		{
			'text-white bg-primary-main hover:bg-primary-dark focus:ring-primary':
				variant === 'default',
			'text-gray-700 bg-white border border-gray-400 hover:bg-gray-100 focus:ring-gray-500':
				variant === 'outlined',
			'bg-transparent w-fit text-gray-700 hover:text-primary-main focus:text-primary-main':
				variant === 'link',
			'pointer-events-none': props.disabled,
		},
		className
	);

	const spanClass = classNames({
		'block border-0 border-b-[1px] border-solid pb-1': variant === 'link',
	});

	return (
		<button onClick={onClick} type={type} className={buttonClass} {...props}>
			<span className={spanClass}>{label}</span>
		</button>
	);
};

export default Button;
