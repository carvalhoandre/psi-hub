import React from 'react';

import { AuthLayoutProps } from './types';

const AuthLayout: Component<AuthLayoutProps> = ({ children }) => {
	return (
		<div
			className='
				min-h-[calc(100vh-220px)] 
				bg-background 
				flex 
				items-center 
				justify-center
				max-sm:relative 
				max-sm:min-h-screen 
				max-sm:bg-transparent 
				max-sm:flex-none 
				max-sm:items-start 
				max-sm:justify-start
			'
		>
			<div className='bg-white rounded-md p-8 shadow-md max-w-md w-full'>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
