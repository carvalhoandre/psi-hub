import { LoginResponse } from 'actions/login/types';

/**
 * Validates if a field is non-empty and returns a LoginResponse object if invalid.
 * @param value The value to check.
 * @param fieldName The name of the field for error messages.
 * @returns A LoginResponse with an error if invalid; null if valid.
 */
export const validateRequiredField = (
	value: string | null,
	fieldName: string
): LoginResponse | null => {
	if (!value || value.trim().length === 0) {
		return {
			ok: false,
			error: `Por favor, preencha o campo de ${fieldName}.`,
			data: null,
		};
	}
	return null;
};
