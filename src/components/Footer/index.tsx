'use client';

import React from 'react';

import useIsHome from 'hooks/useIsHome';

import FooterHome from 'components/Footer/FooterHome';

const Footer: Component = () => {
	const isHome = useIsHome();

	if (isHome) return <FooterHome />;

	return (
		<footer className='text-text-dark py-10 px-5 border-0 border-t border-solid border-background pt-5 text-center'>
			<p className='text-sm mb-2'>CRP 06/200951</p>
			<p className='text-sm text-text-dark'>
				&copy; 2024 Giovanna Dias. Todos os direitos reservados.
			</p>
		</footer>
	);
};

export default Footer;
