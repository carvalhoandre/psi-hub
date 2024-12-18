'use client';

import React from 'react';
import Link from 'next/link';

import Input from 'components/Input';
import Title from 'components/Title';

const LoginPage: Component = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log('data:', email, password);
	};

	return (
		<div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
			<Title text='Login' />

			<form onSubmit={handleSubmit} className='space-y-4 mt-4 mb-4'>
				<Input
					id='email'
					label='Email'
					type='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<Input
					id='password'
					label='Senha'
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>
				<div>
					<button
						type='submit'
						className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-main hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
					>
						Entrar
					</button>
				</div>
			</form>

			<div className=' flex flex-col gap-4 mt-4'>
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
