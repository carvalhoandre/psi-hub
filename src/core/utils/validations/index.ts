import * as Types from './types';

import { commonValidations } from './common';
import { passwordValidations } from './password';

/**
 * Cria um validador de campo que utiliza um método de validação fornecido.
 *
 * @param {Function} validateMethod - O método de validação a ser utilizado. Deve retornar um booleano.
 * @param {string} [message='Campo precisa ser preenchido.'] - A mensagem de erro a ser retornada se a validação falhar.
 * @returns {Function} Uma função que recebe um valor e retorna uma mensagem de erro se a validação falhar, ou uma string vazia se passar.
 */
export const createFieldValidator: Types.ValidateFieldFn = (
	validateMethod,
	message = 'Campo precisa ser preenchido.'
) => {
	return (value) => (validateMethod?.(value) ? message : '');
};

export const validations = {
	common: commonValidations,
	password: passwordValidations,
};

export { Types };
