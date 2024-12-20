'use client';

import React from 'react';

import ConfirmAccount from 'actions/confirmAccount';

import { Button, Input, ErrorMessage } from 'components';

const ConfirmAccountForm: Component = () => {
	const [state, action, isPending] = React.useActionState(ConfirmAccount, {
		ok: false,
		error: '',
		data: null,
	});

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				action(new FormData(e.currentTarget));
			}}
			className='w-full flex flex-col items-start gap-12 pt-2 mx-auto rounded-lg'
		>
			<Input type='code' />

			{state.error && <ErrorMessage error={state.error} />}

			<Button
				type='submit'
				disabled={isPending}
				label={isPending ? 'Enviando...' : 'Enviar'}
			/>
		</form>
	);
};

export default ConfirmAccountForm;
