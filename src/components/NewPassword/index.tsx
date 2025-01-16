'use client';

import React from 'react';

import {
	createFieldValidator,
	Types as ValidationsTypes,
} from 'core/utils/validations';

import { Input, Button, ValidationList } from 'components';

import { PASSWORD_VALIDATIONS_LIST, passwordFieldValidator } from './constants';

const NewPassword: Component = () => {
	const [password, setPassword] = React.useState<string>('');
	const [confirmPassword, setConfirmPassword] = React.useState<string>('');

	const validateIfIsDiferentPassword: ValidationsTypes.ValidateFn = () => {
		return password !== confirmPassword;
	};

	const confirmPasswordValidator = createFieldValidator(
		validateIfIsDiferentPassword,
		'As senhas devem ser iguais.'
	);

	const hasErrorInPasswords = Boolean(
		passwordFieldValidator(password) ||
			confirmPasswordValidator(confirmPassword)
	);

	return (
		<>
			<Input
				type='password'
				label='Nova Senha'
				name='new-password'
				value={password}
				onChangeText={setPassword}
				validateError={passwordFieldValidator}
			/>

			<Input
				type='password'
				label='Confirmar Nova Senha'
				name='confirm-password'
				value={confirmPassword}
				onChangeText={setConfirmPassword}
				validateError={confirmPasswordValidator}
			/>

			<ValidationList
				validations={PASSWORD_VALIDATIONS_LIST}
				value={password}
			/>

			<Button label='Enviar' disabled={hasErrorInPasswords} className='mt-8' />
		</>
	);
};

export default NewPassword;
