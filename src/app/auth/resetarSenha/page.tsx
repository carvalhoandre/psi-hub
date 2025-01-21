import React from 'react';

import Title from 'components/Title';
import RecoverPassword from 'components/Auth/RecoverPassword';

const PasswordResetPage: Page<'PasswordReset'> = async ({ searchParams }) => {
	const { login, key } = await searchParams;

	const isNotAccredited = !login || !key;

	return (
		<>
			<Title text='Resetar Senha' className='!text-[2rem] mb-8' />

			<RecoverPassword isNotAccredited={isNotAccredited} />
		</>
	);
};

export default PasswordResetPage;
