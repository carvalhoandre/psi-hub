import React from 'react';
import PorfileImage from '../../../../public/images/IMG_1153-rede-social.webp';

import OptimizedImage from 'components/OptimizedImage';
import Title from 'components/Title';

const About: React.FC = () => {
	return (
		<main
			id='about'
			className='
	  		relative 
        bg-background 
        shadow-inset-white 
        max-800:shadow-inset-white-small 
        max-800:pt-10
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
          grid 
          grid-cols-2 
          gap-10
          max-800:grid-cols-1
          max-800:gap-8
					max-800:py-10
        '
			>
				<div
					className='
          	self-end 
          	pb-[200px] 
          	max-800:pb-0
          '
				>
					<Title text='Sou a Giovanna Dias' />

					<h2
						className="
              text-h1 
              font-medium 
              text-text-dark 
              mb-4 
              [data-anime='200']:transition-opacity
            "
					>
						Psicóloga formada pela Universidade Paulista UNIP
					</h2>

					<p
						className="
              text-base 
              leading-[1.6] 
              text-text-dark 
              mb-[30px] 
              [data-anime='300']:transition-opacity
            "
					>
						Minha missão é ajudar as pessoas a ressignificarem suas experiências
						e a encontrarem um novo sentido para suas vidas. Acredito que cada
						um de nós carrega um potencial de transformação incrível, e meu
						papel é te acompanhar nesse processo, oferecendo escuta, acolhimento
						e compreensão.
					</p>

					<a
						href='#contact'
						className='
						inline-block 
						p-4 
						px-8 
						bg-gradient-to-b 
						from-primary 
						to-primary-dark 
						rounded 
						shadow 
						uppercase 
						text-white 
						leading-[1.33] 
						max-w-max 
						font-body 
						cursor-pointer 
						hover:from-primary-dark 
						hover:to-primary
					'
					>
						Marcar Consulta
					</a>
				</div>

				<picture>
					<source
						media='(max-width: 800px)'
						srcSet='../../../../public/images/small_profile_image.webp'
					/>

					<OptimizedImage
						src={PorfileImage}
						alt='Giovanna Dias'
						className='w-full h-full object-cover rounded'
					/>
				</picture>
			</div>
		</main>
	);
};

export { About };
