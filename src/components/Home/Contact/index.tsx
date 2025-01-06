import React from 'react';
import SocialImage from '../../../../public/images/IMG_1134-rede-social.webp';

import Title from 'components/Title';
import OptimizedImage from 'components/OptimizedImage';
import { SocialsIcons } from 'components/SocialsIcons';

const Contact: Component = () => {
	return (
		<article
			id='contact'
			className='
			bg-background 
			shadow-outset-white 
			max-sm:shadow-inset-white-small 
			py-16
		'
			style={{
				backgroundImage: "url('../../../../public/images/dec/bottom-left.svg')",
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'left 20px bottom 160px',
			}}
		>
			<div
				className='
				container 
				mx-auto 
				px-4
				grid 
				grid-cols-2 
				gap-10
				max-sm:grid-cols-1 
				max-sm:gap-8
			'
			>
				<div className='self-center'>
					<span className='block mb-4 text-sm font-medium text-text-light'>
						Através das minha redes sociais
					</span>

					<Title text='Entre em contato' />

					<div className='mt-4'>
						<p className='font-bold text-text-dark mb-4'>
							Abordagem: Terapia Cognitivo Comportamental - TCC
						</p>
						<p className='text-normal leading-relaxed text-text-dark'>
							Posso te ajudar falando sobre... Morte e luto - Autocuidado
							Relacionamentos - Procrastinação - Orientação profissional -
							Tristeza - Medos - Angústia
						</p>
					</div>

					<p
						className="
							inline-block 
							my-8
							font-medium 
							text-[1.25rem] 
							leading-[1.5] 
							font-body 
							uppercase 
							text-text-dark 
							relative
							after:content-[''] 
							after:block 
							after:w-full 
							after:h-1 
							after:bg-current 
							after:mt-2
  					"
					>
						Escolha uma das minhas redes
					</p>

					<div className='mt-4 flex gap-10 max-sm:mt-0 max-sm:flex max-sm:justify-center'>
						{/* <SocialsIcons /> */}
					</div>
				</div>

				<div className='flex items-center justify-center'>
					<OptimizedImage
						src={SocialImage}
						alt='Giovanna Dias'
						className='w-full h-full object-cover rounded max-sm:hidden'
					/>
				</div>
			</div>
		</article>
	);
};

export default Contact;
