'use server';

import * as Types from './types';

const ValidateCode = async (_: any): Promise<Types.ValidateCodeResponse> => {
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

export default ValidateCode;
