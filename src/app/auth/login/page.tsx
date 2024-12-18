'use client';

import React from 'react';
import Link from 'next/link';

import { Button, Title, Input } from 'components';

const LoginPage: Component = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleSubmit = () => {
		console.log('data:', email, password);
	};

	return (
		<div className='bg-white p-8 rounded shadow-md w-full max-w-sm'>
			<Title text='Login' />

			<div className='space-y-4 mt-4 mb-4'>
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
					<Button label='Entrar' onClick={handleSubmit} />
				</div>
			</div>

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
