import React from 'react';
import PorfileImage from '../../../../public/images/IMG_1153-rede-social.webp';

import OptimizedImage from 'components/OptimizedImage';
import Title from 'components/Title';

const About: React.FC = () => {
	return (
		<main
			id='about'
			className='relative bg-background shadow-[inset_0_-120px_var(--color-white)]'
			style={{
				backgroundImage: "url('../../../../public/images/dec/bottom-left.svg')",
				backgroundPosition: 'bottom 160px left 20px',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-20'>
				<div className='self-end pb-20 md:pb-0'>
					<Title text='Sou a Giovanna Dias' />

					<h2 className='text-2xl font-medium text-text-dark mb-4'>
						Psicóloga formada pela Universidade Paulista UNIP
					</h2>
					<p className='text-base leading-relaxed text-text-dark mb-8'>
						Minha missão é ajudar as pessoas a ressignificarem suas experiências
						e a encontrarem um novo sentido para suas vidas. Acredito que cada
						um de nós carrega um potencial de transformação incrível, e meu
						papel é te acompanhar nesse processo, oferecendo escuta, acolhimento
						e compreensão.
					</p>

					<a
						href='#contact'
						className='inline-block px-8 py-4 bg-gradient-to-b from-primary to-secondary text-white rounded-md shadow-md uppercase font-semibold hover:from-secondary hover:to-primary'
					>
						Marcar Consulta
					</a>
				</div>

				<div>
					<picture>
						<source
							media='(max-width: 800px)'
							srcSet='../../../../public/images/small_profile_image.webp'
						/>
						<OptimizedImage
							src={PorfileImage}
							alt='Giovanna Dias'
							width={500}
							height={500}
							className='w-full h-auto object-cover rounded-lg'
						/>
					</picture>
				</div>
			</div>
		</main>
	);
};

export { About };
