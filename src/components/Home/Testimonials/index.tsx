import React from 'react';

import Title from 'components/Title';

import { testimonials } from 'components/Home/Testimonials/constant';
import TestimonialCard from 'components/Home/Testimonials/components/TestimonialCard';

const Testimonials: Component = () => {
	return (
		<section
			id='testimonials'
			className='
					container
					py-12 px-5
					text-center
				'
		>
			<Title text='O que dizem sobre mim' />

			<p
				className='
						font-sans text-base leading-[1.6] text-text-dark 
						mb-10
					'
			>
				Confira algumas palavras de pacientes que encontraram suporte e
				acolhimento em meu trabalho.
			</p>

			<div
				className='
						flex gap-5 
						overflow-x-auto 
						justify-center
						pb-[10px] 
						scroll-smooth
						max-800:flex-col 
						max-800:items-center
					'
			>
				{testimonials.map((testimonial, index) => (
					<TestimonialCard
						key={index}
						text={testimonial.text}
						author={testimonial.author}
					/>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
