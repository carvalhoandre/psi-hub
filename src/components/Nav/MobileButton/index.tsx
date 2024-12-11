'use client';
import React from 'react';

import classNames from 'classnames';

import * as Types from './types';

const MobileButton: Component<Types.MobileButtonProps> = ({
	isOpenMenu,
	setIsOpenMenu,
}) => {
	const handleToggleMenu = () => setIsOpenMenu((prev) => !prev);

	const mobileButtonClassName = classNames(
		'text-text-dark bg-background-light rounded-sm w-10 h-10 flex justify-center items-center border-1-transparent duration-100 cursor-pointer p-0',
		'after:content-[""] after:block after:h-[2px] after:rounded-sm after:bg-current after:shadow-mobile-button-after after:duration-200',
		'hover:outline-none hover:bg-white hover:shadow-mobile-button',
		'focus:outline-none focus:bg-white focus:shadow-mobile-button',
		isOpenMenu && 'outline-none bg-white shadow-mobile-button',
		isOpenMenu &&
			'after:rotate-90 after:h-1 after:shadow-mobile-button-active-after after:text-primary-main',
		isOpenMenu ? 'after:w-[2px] ' : 'after:w-[1.2rem]'
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
