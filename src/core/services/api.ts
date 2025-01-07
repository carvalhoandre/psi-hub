import axios, {
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig,
} from 'axios';

const API = axios.create({
	baseURL: process.env.NEXT_API_URL,
});

const getToken = (): string | null => localStorage.getItem('token');

const parseRequest = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	const token = getToken();
	if (token && config.headers) {
		config.headers.Authorization = token;
	}
	return config;
};

const parseResponse = (response: AxiosResponse): AxiosResponse => {
	const { mocked, ...data } = response.data;

	return {
		...response,
		data: {
			success: true,
			...(Array.isArray(data) ? { data } : data),
		},
	};
};

const parseResponseError = (error: AxiosError): Promise<AxiosResponse> => {
	const response = error.response;
	const data = response?.data as {
		message?: string;
		data?: any;
		code?: number | string;
		validations?: any[];
		validation?: any[];
	};

	const defaultErrorMessage = 'Erro ao realizar a ação';

	const errorResponse: AxiosResponse = {
		status: response?.status ?? 500,
		statusText: response?.statusText ?? 'Internal Server Error',
		headers: response?.headers ?? {},
		config: response?.config ?? ({} as InternalAxiosRequestConfig),
		request: response?.request,
		data: {
			success: false,
			isCanceled: axios.isCancel(error),
			message: data?.message || defaultErrorMessage,
			data: data?.data,
			code: data?.code,
			firstValidation: data?.validations?.[0] || data?.validation?.[0],
		},
	};

	// TODO: implements logout
	// if (Number(data?.code) === 401) {
	// 	window.location.href = '/logout';
	// }

	return Promise.resolve(errorResponse);
};

API.interceptors.request.use(parseRequest);
API.interceptors.response.use(parseResponse, parseResponseError);

export default API;
