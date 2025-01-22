import React from 'react';

import Link from 'next/link';

import { Title } from 'components';
import LoginForm from 'components/Auth/LoginForm';

const LoginPage: Component = () => {
	return (
		<div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
			<Title text='Login' />

			<LoginForm />

			<div className='flex flex-col gap-4 mt-4'>
				<Link
					href='/auth/resetarSenha'
					className='text-sm text-primary-main hover:underline'
				>
					Esqueci minha senha
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
