export interface ILoginPayload {
	email: string;
	password: string;
}

export interface IAuthUser {
	confirmation_code: boolean;
	cpf: string;
	email: string;
	id: number;
	name: string;
	role: string;
}

export interface ILoginResponse {
	access_token: string;
	refresh_token: string;
	user: IAuthUser;
}
