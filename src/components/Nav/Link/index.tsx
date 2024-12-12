'use client';
import React from 'react';

import * as Types from './types';
import classNames from 'classnames';

const Link: Component<Types.LinkProps> = ({
	children,
	className,
	...props
}) => {
	const linkClassNames = classNames(
		'cursor-pointer decoration-none text-text-dark font-roboto transition-colors duration-300',
		'hover:text-primary-main focus:text-primary-main active:text-primary-main',
		'max-sm:flex max-sm:items-center border-0 border-b border-solid border-[#EEE] p-2 font-roboto text-base',
		className
	);

	return (
		<a className={linkClassNames} {...props}>
			{children}
		</a>
	);
};

export default Link;
