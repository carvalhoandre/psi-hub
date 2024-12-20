import React from 'react';
import Link from 'next/link';

import Title from 'components/Title';
import ConfirmAccountForm from 'components/Auth/ConfirmAccountForm';

const ConfirmAccountPage: Page<'ConfirmAccount'> = () => {
	return (
		<div className='w-full flex flex-col gap-6'>
			<div>
				<Title text='Confirmar conta' />
				<p className='text-gray-500 text-sm text-start'>
					Digite o código enviado para seu email.
				</p>
			</div>

			<ConfirmAccountForm />
		</div>
	);
};

export default ConfirmAccountPage;
