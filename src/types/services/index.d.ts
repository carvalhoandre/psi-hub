export interface IResponseData<Data> {
	success: boolean;
	message: string;
	data: Data;
	code: number;
	firstValidation?: any;
}
