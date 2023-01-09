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

export interface IUser {
	id: number;
	email: string;
	firstName: string;
	lastName: string;
	imageUrl: string;
	fullName: string;
}
