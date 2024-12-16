'use client';

import React from 'react';

import { AuthLayoutProps } from './types';

import useMedia from 'hooks/useMedia';

const AuthLayout: Component<AuthLayoutProps> = ({ children }) => {
	const isMobile = useMedia('(max-width: 40rem)');

	return (
		<div
			className={
				isMobile
					? 'p-relative min-h-screen'
					: 'min-h-[calc(100vh-220px)] bg-background flex items-center justify-center'
			}
		>
			<div className='bg-white rounded-md p-8 shadow-md max-w-md w-full'>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
