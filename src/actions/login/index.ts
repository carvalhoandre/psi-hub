'use server';

import { LoginResponse } from './types';

import { postLogin } from 'core/services/auth';
import { validateRequiredField } from 'core/helpers/actionsValidations/login';

const Login = async (_: any, formData: FormData): Promise<LoginResponse> => {
	try {
		const email = formData.get('email') as string | null;
		const password = formData.get('password') as string | null;

		const emailErrorResponse = validateRequiredField(email, 'email');
		if (emailErrorResponse) return emailErrorResponse;

		const passwordErrorResponse = validateRequiredField(password, 'senha');
		if (passwordErrorResponse) return passwordErrorResponse;

		const { data, success, message } = await postLogin({
			email: email!,
			password: password!,
		});

		return {
			ok: success,
			error: message,
			data,
		};
	} catch (error: unknown) {
		const errorMessage =
			error instanceof Error ? error.message : 'Erro ao realizar ação.';

		return {
			ok: false,
			error: errorMessage,
			data: null,
		};
	}
};

export default Login;
