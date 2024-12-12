import React from 'react';

import OptimizedImage from 'components/OptimizedImage';

import { footerInfo, navLinks } from 'components/Footer/constant';

import ArrowUp from '../../../public/images/icons/arrow-up.svg';

const Footer: Component = () => {
	return (
		<footer className='text-text-dark px-5 py-10'>
			<div className='container mx-auto flex flex-col items-center md:flex-row justify-between gap-10 mb-10  md:shadow-inset-white'>
				<div>
					{footerInfo.map((info, index) => (
						<div key={index} className='flex items-start gap-4 mb-6'>
							<OptimizedImage
								src={info.src}
								className='text-primary-main text-2xl'
								alt={info.title}
								width={36}
								height={36}
							/>

							<div>
								<h3 className='text-lg font-medium'>{info.title}</h3>
								{info.subtitle && (
									<a
										href={info.link}
										target='_new'
										rel='noopener noreferrer'
										className='text-sm text-text-light hover:text-primary-main transition-colors'
									>
										{info.subtitle}
									</a>
								)}
							</div>
						</div>
					))}
				</div>

				<nav>
					<ul className='flex max-sm:flex-col items-center gap-6'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className='text-base text-text-dark hover:text-primary-main transition-colors'
								>
									{link.label}
								</a>
							</li>
						))}

						<li>
							<a href='#header' aria-label='Navegar para o topo'>
								<OptimizedImage
									src={ArrowUp}
									className='text-primary-main text-2xl hover:scale-110 transition-transform'
									alt='Ícone de seta para cima'
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>

			<div className='border-0 border-t border-solid border-background pt-5 text-center'>
				<p className='text-sm mb-2'>CRP 06/200951</p>
				<p className='text-sm text-text-dark'>
					&copy; 2024 Giovanna Dias. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
