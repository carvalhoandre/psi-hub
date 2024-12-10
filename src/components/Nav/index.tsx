'use client';
import React from 'react';

import useMedia from 'hooks/useMedia';

import MobileButton from './MobileButton';

const Nav: Component = () => {
	const [isOpenMenu, setIsOpenMenu] = React.useState(false);
	const isMobile = useMedia('(max-width: 40rem)');

	const handleLinkClick = () => {
		if (isMobile) setIsOpenMenu(false);
	};

	return (
		<>
			{isMobile && (
				<MobileButton isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
			)}

			<nav
			// className={`${isMobile ? 'navMobile' : 'nav'} ${
			// 	mobileMenu && 'navMobileActive'
			// }`}
			>
				<a href='#about' className='nav-link' onClick={handleLinkClick}>
					Sobre Mim
				</a>
				<a href='#approaches' className='nav-link' onClick={handleLinkClick}>
					Abordagens
				</a>
				<a href='#testimonials' className='nav-link' onClick={handleLinkClick}>
					Depoimentos
				</a>
				<a href='#contact' className='nav-link' onClick={handleLinkClick}>
					Contato
				</a>
			</nav>
		</>
	);
};

export default Nav;
