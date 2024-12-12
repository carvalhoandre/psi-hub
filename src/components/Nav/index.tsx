'use client';
import React from 'react';

import classNames from 'classnames';

import useMedia from 'hooks/useMedia';

import MobileButton from './MobileButton';
import Link from './Link';

const Nav: Component = () => {
	const [isOpenMenu, setIsOpenMenu] = React.useState(false);
	const isMobile = useMedia('(max-width: 40rem)');

	const navClassNames = classNames(
		'flex gap-5',
		'max-sm:block max-sm:absolute max-sm:top-[70px] max-sm:right-0 max-sm:py-0 max-sm:px-4 max-sm:bg-white max-sm:shadow-nav-mobile max-sm:rounded-small max-sm:translate-x-[-10px] max-sm:pointer-events-none',
		isOpenMenu &&
			'transition-all duration-300 z-50  translate-x-0 pointer-events-auto max-sm:flex-col',
		isOpenMenu ? 'opacity-100' : 'max-sm:opacity-0'
	);

	const handleLinkClick = () => {
		if (isMobile) setIsOpenMenu(false);
	};

	return (
		<>
			{isMobile && (
				<MobileButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			)}

			<nav className={navClassNames}>
				<Link
					href='#about'
					className='nav-link top-16'
					onClick={handleLinkClick}
				>
					Sobre Mim
				</Link>

				<Link href='#approaches' className='' onClick={handleLinkClick}>
					Abordagens
				</Link>

				<Link
					href='#testimonials'
					className='nav-link'
					onClick={handleLinkClick}
				>
					Depoimentos
				</Link>

				<Link href='#contact' className='nav-link' onClick={handleLinkClick}>
					Contato
				</Link>
			</nav>
		</>
	);
};

export default Nav;
