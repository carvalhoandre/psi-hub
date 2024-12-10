'use client';
import React from 'react';

import classNames from 'classnames';

import {
	afterClassNames,
	interactionStatesClassNames,
} from 'core/utils/classNames';

import * as Types from './types';

const MobileButton: Component<Types.MobileButtonProps> = ({
	isOpenMenu,
	setIsOpenMenu,
}) => {
	const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

	const mobileButtonActive =
		'outline-none bg-white shadow-custom-mobile-button';

	const mobileButtonClassName = classNames(
		'text-text-dark bg-background-light rounded-sm w-10 h-10 flex justify-center items-center border-1-transparent duration-100 cursor-pointer p-0',
		afterClassNames(
			'content-[""] block width-[1.2rem] h-[2px] rounded-sm bg-current shadow-custom-mobile-button-after duration-200'
		)
		// interactionStatesClassNames(mobileButtonActive),
		// isOpenMenu && mobileButtonActive,
		// isOpenMenu &&
		// 	afterClassNames(
		// 		'rotate-90 w-1 h-1 shadow-custom-mobile-button-active-after'
		// 	)
	);

	return (
		<button
			className={mobileButtonClassName}
			aria-label='Menu'
			onClick={handleToggleMenu}
		/>
	);
};

export default MobileButton;
