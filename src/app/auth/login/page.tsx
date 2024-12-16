'use client';

import React from 'react';
import Link from 'next/link';

const LoginPage: Component = () => {
	const [email, setEmail] = React.useState('');
	const [password, setPassword] = React.useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		console.log('data:', email, password);
	};

	return <>LOGIN</>;
};

export default LoginPage;
