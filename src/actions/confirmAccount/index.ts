'use server';

import { ActionsResponse } from 'types/actions';

const ConfirmAccount = async (
	_: any,
	formData: FormData
): Promise<ActionsResponse> => {
	try {
		const code = Array.from({ length: 4 }, (_, index) =>
			formData.get(`digit-${index}`)
		)
			.join('')
			.trim();

		if (code.length !== 4 || !/^\d{4}$/.test(code)) {
			return {
				ok: false,
				error: 'Por favor, insira um código válido de 4 dígitos.',
				data: null,
			};
		}

		// TODO: Implementar chama api
		console.log('Código enviado:', code);

		return {
			ok: true,
			error: '',
			data: { code },
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

export default ConfirmAccount;
