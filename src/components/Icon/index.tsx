'use client';
import React from 'react';

import classNames from 'classnames';

import * as Types from './types';

import SvgList from './svg';

const Icon: Component<Types.IconProps> = ({
	testId = 'icon',
	className,
	size,
	width,
	height,
	name,
	disabled,
	onClick,
}) => {
	const IconComponent = SvgList[name];

	const containerClassnames = classNames(
		'w-full h-full cursor-pointer transition-all duration-300 flex items-center justify-center',
		`max-w-[${width || size}px] max-h-[${height || size}px]`,
		{ 'pointer-events-none': !onClick, grayscale: disabled },
		className
	);

	const iconClassnames = classNames(
		`w-[${width || size}px] h-[${height || size}px] block`,
		{ grayscale: disabled }
	);

	const handleOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation();
		e.preventDefault();

		onClick?.(e);
	};

	return (
		<div
			data-testid={testId}
			onClick={handleOnClick}
			className={containerClassnames}
		>
			<IconComponent className={iconClassnames} />
		</div>
	);
};

export default Icon;
