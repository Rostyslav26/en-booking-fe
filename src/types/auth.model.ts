export interface ILoginRequest {
	email: string;
	password: string;
	rememberMe: boolean;
}

export interface ILoginResponse {
	token: string;
}

export interface IRegisterRequest {
	email: string;
	password: string;
	confirmedPassword: string;
	firstName: string;
	lastName: string;
}
