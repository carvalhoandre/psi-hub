import React from 'react';
import Title from 'components/Title';

const PasswordResetPage: Page<'PasswordReset'> = ({ searchParams }) => {
	const { key, login } = searchParams;

	return (
		<>
			<Title text='Resetar Senha' />
		</>
	);
};

export default PasswordResetPage;
