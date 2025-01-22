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
		console.error('postLogin Error:', error);
		throw error;
	}
};
