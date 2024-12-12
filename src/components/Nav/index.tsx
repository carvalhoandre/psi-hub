'use client';
import React from 'react';
import classNames from 'classnames';

import useMedia from 'hooks/useMedia';
import MobileButton from './MobileButton';
import Link from './Link';
import { navLinks } from 'components/Footer/constant';

const Nav: Component = () => {
	const [isOpenMenu, setIsOpenMenu] = React.useState(false);
	const isMobile = useMedia('(max-width: 40rem)');

	const baseClasses = `
    flex gap-5
    max-sm:block max-sm:absolute max-sm:top-[70px] max-sm:right-0
    max-sm:py-0 max-sm:px-4 max-sm:bg-white max-sm:shadow-nav-mobile
    max-sm:rounded-small transition-all duration-300 z-50
		z-9
  `;

	const closedClasses = `
    max-sm:translate-x-[-10px]
    max-sm:opacity-0
    max-sm:pointer-events-none
  `;

	const openClasses = `
    max-sm:flex-col
    translate-x-0
    pointer-events-auto
    opacity-100
  `;

	const navClassNames = classNames(
		baseClasses,
		isMobile ? (isOpenMenu ? openClasses : closedClasses) : null
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
				{navLinks.map(({ href, label }, index) => (
					<Link
						href={href}
						className='nav-link'
						onClick={handleLinkClick}
						key={index + href}
					>
						{label}
					</Link>
				))}
			</nav>
		</>
	);
};

export default Nav;
