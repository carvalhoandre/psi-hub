import React from 'react';

import Title from 'components/Title';
import { ApproachCard } from 'components/Home/Approaches/components/ApproachCard';
import { approachesData } from 'components/Home/Approaches/constant';

const Approaches: Component = () => {
	return (
		<section
			id='approaches'
			className='
        container 
        text-center
        pt-[60px] 
        pb-[120px] 
        px-4 
        max-md:pt-0 
        max-md:pb-0
      '
		>
			<Title text='Como posso te ajudar?' />

			<p
				className='
          font-sans 
          text-[18px] 
          leading-[1.6] 
          text-text-dark 
          mb-10
        '
			>
				Utilizo diferentes abordagens terapêuticas para atender às suas
				necessidades de forma personalizada e acolhedora.
			</p>

			<div
				className='
          grid 
          gap-5 
          grid-cols-[repeat(auto-fit,minmax(250px,1fr))] 
          max-md:px-8 
          max-md:grid-cols-1
        '
			>
				{approachesData.map((approach, index) => (
					<ApproachCard
						key={index}
						title={approach.title}
						text={approach.text}
					/>
				))}
			</div>
		</section>
	);
};

export default Approaches;
