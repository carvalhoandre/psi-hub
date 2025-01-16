'use server';

import * as Types from './types';

const SendPasswordResetEmail = async (
	_: any
): Promise<Types.SendPasswordResetEmailResponse> => {
	try {
		return {
			ok: true,
			error: '',
			data: {},
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

export default SendPasswordResetEmail;
