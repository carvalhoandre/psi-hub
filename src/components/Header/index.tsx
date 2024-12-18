'use client';

import { useRouter } from 'next/navigation';

import classNames from 'classnames';

import useIsHome from 'hooks/useIsHome';

import Nav from 'components/Nav';
import OptimizedImage from 'components/OptimizedImage';

const Header: Component = () => {
	const isHome = useIsHome();
	const router = useRouter();

	const containerClassNames = classNames(
		'container flex justify-between items-center px-4 py-2'
	);

	const handleLogoClick = () => {
		router.push('/');
	};

	return (
		<header className='bg-background sm:flex-wrap' id='header'>
			<div className={containerClassNames}>
				<div className='flex items-center'>
					<OptimizedImage
						alt='Logo com as iniciais G e D, representando o nome Giovanna Dias'
						src='/images/logo.svg'
						height={48}
						width={48}
						priority
						className='w-12 h-12 cursor-pointer'
						onClick={handleLogoClick}
					/>

					<div>
						<h1 className='font-playfair text-h1 m-0 ml-4 text-text-dark'>
							Giovanna Dias
						</h1>

						<p className='font-roboto text-base m-o ml-4 text-text-dark'>
							Psicóloga - CRP 06/200951
						</p>
					</div>
				</div>

				{isHome && <Nav />}
			</div>
		</header>
	);
};

export default Header;
