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
		className
	);

	return (
		<a className={linkClassNames} {...props}>
			{children}
		</a>
	);
};

export default Link;
