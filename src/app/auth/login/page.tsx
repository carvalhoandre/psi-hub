'use client';

import React from 'react';
import { useFormState } from 'react-dom';
import Link from 'next/link';

import Login from 'actions/login';

import { Button, Title, Input, ErrorMessage } from 'components';

const LoginPage: Component = () => {
	const [state, action] = useFormState(Login, {
		ok: false,
		error: '',
		data: null,
	});

	return (
		<div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
			<Title text='Login' />

			<form action={action} className='space-y-4 mt-4 mb-4'>
				<Input id='email' label='Email' type='email' required />

				<Input id='password' label='Senha' type='password' required />

				<ErrorMessage error={state.error} />

				<Button label='Entrar' type='submit' />
			</form>

			<div className='flex flex-col gap-4 mt-4'>
				<Link
					href='/forgot-password'
					className='text-sm text-primary-main hover:underline'
				>
					Esqueci minha senha
				</Link>
			</div>
		</div>
	);
};

export default LoginPage;
