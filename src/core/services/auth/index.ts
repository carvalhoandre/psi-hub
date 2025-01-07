import { IResponseData } from 'types/services';
import API from '../api';

import * as Types from 'types/services/auth';

export const postLogin = async (payload: Types.LoginPayload) => {
	return (await API.post(
		'/login',
		payload
	)) as IResponseData<Types.LoginResponse>;
};
