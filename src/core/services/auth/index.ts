import API from '../api';
import { IResponseData } from 'types/services';

import * as Types from 'types/services/auth';

export const postLogin = async (
	payload: Types.LoginPayload
): Promise<IResponseData<Types.LoginResponse>> => {
	try {
		const { data } = await API.post('login', payload);

		return data;
	} catch (error) {
		throw error;
	}
};

export const postRecoveryPassword = async (
	email: string
): Promise<IResponseData<Types.LoginResponse>> => {
	try {
		const { data } = await API.post('user/forgot-password', { email });

		return data;
	} catch (error) {
		throw error;
	}
};
