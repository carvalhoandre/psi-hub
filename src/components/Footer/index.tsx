import OptimizedImage from 'components/OptimizedImage';
import React from 'react';

import Map from '../../../public/images/icons/map-marker.svg';
import Envelope from '../../../public/images/icons/envelope.svg';
import Phone from '../../../public/images/icons/phone.svg';
import ArrowUp from '../../../public/images/icons/arrow-up.svg';

const footerInfo = [
	{
		src: Map,
		title: 'Atendimentos Online',
	},
	{
		src: Envelope,
		title: 'Email',
		subtitle: 'giovanna.diasss09@gmail.com',
		link: 'mailto:giovanna.diasss09@gmail.com?Subject=Olá Giovanna',
	},
	{
		src: Phone,
		title: 'Telefone',
		subtitle: '+55 (11) 94305-0454',
		link: 'https://api.whatsapp.com/send?phone=5511943050454&text=Ol%C3%A1!',
	},
];

const navLinks = [
	{ href: '#about', label: 'Sobre Mim' },
	{ href: '#approaches', label: 'Abordagens' },
	{ href: '#testimonials', label: 'Depoimentos' },
	{ href: '#contact', label: 'Contato' },
];

const Footer: Component = () => {
	return (
		<footer className='bg-background text-text-dark px-5 py-10'>
			<div className='container mx-auto flex flex-col md:flex-row justify-between gap-10 mb-10'>
				<div>
					{footerInfo.map((info, index) => (
						<div key={index} className='flex items-start gap-4 mb-6'>
							<OptimizedImage
								src={info.src}
								className='text-primary text-2xl'
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
										className='text-sm text-text-light hover:text-primary transition-colors'
									>
										{info.subtitle}
									</a>
								)}
							</div>
						</div>
					))}
				</div>

				<nav>
					<ul className='flex flex-col items-center gap-6'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<a
									href={link.href}
									className='text-base text-text-dark hover:text-primary transition-colors'
								>
									{link.label}
								</a>
							</li>
						))}

						<li>
							<a href='#header' aria-label='Navegar para o topo'>
								<OptimizedImage
									src={ArrowUp}
									className='text-primary text-2xl text-primary text-2xl hover:scale-110 transition-transform'
									alt='Ícone de seta para cima'
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className='border-t border-border pt-5 text-center'>
				<p className='text-sm mb-2'>CRP 06/200951</p>
				<p className='text-sm text-text-dark'>
					&copy; 2024 Giovanna Dias. Todos os direitos reservados.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
