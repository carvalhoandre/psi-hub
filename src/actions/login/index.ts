'use server';

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

		// TODO: Implementar chamada à API após configurar Axios
		return {
			ok: true,
			error: '',
			data: { email },
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
