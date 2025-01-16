import React from 'react';

import classNames from 'classnames';

import * as Types from './types';

import Show from '../Show';

export const TooltipContent: ComponentWithChildren<
	Types.TooltipContentProps
> = ({
	testId = 'tooltip-content',
	children,
	className,
	type,
	positionVertical,
	positionHorizontal,
}) => {
	const containerClassNames = classNames(
		'flex w-fit z-[2] rounded-lg drop-shadow-3xl absolute px-1',
		type === 'dark' ? 'bg-gray-200' : 'bg-white',
		positionVertical === 'top' ? 'top-5' : 'bottom-[calc(100%+0.5rem)]',
		positionHorizontal === 'left' ? 'left-0' : 'right-0',
		className
	);

	return (
		<div data-testid={testId} className={containerClassNames}>
			{children}
		</div>
	);
};

export const Root: ComponentWithChildren<Types.TooltipProps> = ({
	testId = 'tooltip',
	className,
	children,
	isShowingIcon = true,
	isVisibleTooltip,
	setIsVisibleTooltip,
}) => {
	const containerClassName = classNames('w-fit relative fex', className);

	const tooltipButtonClassName = classNames(
		'w-4 h-4 border-[1px] ml-2 text-sm bg-transparent flex items-center justify-center',
		'border-solid border-primary-main rounded-full outline-none  hover:border-primary-dark'
	);

	return (
		<div data-testid={testId} className={containerClassName}>
			<Show isShowing={isShowingIcon}>
				<button
					type='button'
					onClick={() => setIsVisibleTooltip((prev: boolean) => !prev)}
					onMouseEnter={() => setIsVisibleTooltip(true)}
					onMouseLeave={() => setIsVisibleTooltip(false)}
					className={tooltipButtonClassName}
				>
					i
				</button>
			</Show>

			<Show isShowing={isVisibleTooltip}>{children}</Show>
		</div>
	);
};

export default {
	Root,
	TooltipContent,
};
