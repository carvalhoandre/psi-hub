'use server';

import { postLogin } from 'core/services/auth';
import { LoginResponse } from './types';

const Login = async (_: any, formData: FormData): Promise<LoginResponse> => {
	try {
		const email = formData.get('email') as string | null;
		const password = formData.get('password') as string | null;

		if (!email || email.trim().length === 0) {
			return {
				ok: false,
				error: 'Por favor, preencha o campo de email.',
				data: null,
			};
		}

		if (!password || password.trim().length === 0) {
			return {
				ok: false,
				error: 'Por favor, preencha o campo de senha.',
				data: null,
			};
		}

		const { data, success, message } = await postLogin({ email, password });

		console.log('------>', data, success, message);
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
