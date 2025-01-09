'use server';

import * as Types from './types';

const SolicitCode = async (_: any): Promise<Types.SolicitCodeResponse> => {
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

export default SolicitCode;
