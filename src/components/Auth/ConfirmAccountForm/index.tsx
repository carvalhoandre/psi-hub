'use client';

import React from 'react';

import ValidateCode from 'actions/validateCode';
import SolicitCode from 'actions/solicitCode';

import useTimer from 'hooks/useTimer';

import { Button, ErrorMessage, Input } from 'components';

const THRESHOLD_TIMER = 0;
const START_TIMER = 30;

const ConfirmAccountForm: Component = () => {
	const [state, action, isPending] = React.useActionState(ValidateCode, {
		ok: false,
		error: '',
		data: null,
	});

	const [confirmationCode, setConfirmationCode] = React.useState('');
	const isIncompleteConfirmationCode = confirmationCode.length < 4;

	const {
		seconds: secondsLeftToResendToken,
		start: startTimer,
		resetTimer,
		clear,
	} = useTimer({
		startWith: START_TIMER,
		threshold: THRESHOLD_TIMER,
		isResettable: false,
	});

	const isAllowedToSendCode = secondsLeftToResendToken === THRESHOLD_TIMER;

	const onResendCode = async () => {
		resetTimer();

		SolicitCode({});
	};

	React.useEffect(() => {
		startTimer();

		return () => clear();
	}, []);

	return (
		<form action={action}>
			<div className='flex flex-1 flex-col gap-2'>
				<Input
					type='token'
					onChangeText={setConfirmationCode}
					value={confirmationCode}
				/>

				<ErrorMessage error={state.error} />

				<Button
					label={
						isAllowedToSendCode
							? 'Reenviar código'
							: `Solicitar em ${secondsLeftToResendToken} segundos...`
					}
					variant='link'
					className='self-center'
					onClick={onResendCode}
					disabled={!isAllowedToSendCode}
				/>
			</div>

			<Button
				label={isPending ? 'Enviando...' : 'Enviar'}
				disabled={isIncompleteConfirmationCode || isPending}
			/>
		</form>
	);
};

export default ConfirmAccountForm;
