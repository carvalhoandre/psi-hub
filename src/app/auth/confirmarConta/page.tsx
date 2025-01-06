import React from 'react';

import Title from 'components/Title';
import ConfirmAccountForm from 'components/Auth/ConfirmAccountForm';

const ConfirmAccountPage: Page<'ConfirmAccount'> = () => {
	return (
		<div className='flex flex-1 flex-col gap-6'>
			<Title text='Confirmação de Conta' className='!text-[2rem]' />

			<ConfirmAccountForm />
		</div>
	);
};

export default ConfirmAccountPage;
