import React from 'react';

const CmsLayout: ComponentWithChildren = ({ children }) => {
	return (
		<div
			className='
				min-h-[calc(100vh-220px)]
				bg-background
				flex
				items-start 
				justify-start
				mx-auto
				max-sm:relative 
				max-sm:bg-transparent 
				max-sm:flex-none 
			'
		>
			<div className='max-w-[1200px] w-full mx-auto px-5 py-5 my-10 flex flex-col gap-6 bg-white rounded-lg'>
				{children}
			</div>
		</div>
	);
};

export default CmsLayout;
