import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import axios from 'axios';

export interface FieldError {
	property: string;
	message: string;
	code: string;
	rejectedValue: string;
}

export interface ApiError {
	status?: number;
	message?: string;
	fieldErrors?: FieldError[];
	code?: string;
}

const axiosBaseQuery =
	(
		{ baseUrl }: { baseUrl: string } = {
			baseUrl: 'http://localhost:8080/api/v1',
		},
	): BaseQueryFn<
		{
			url: string;
			method: AxiosRequestConfig['method'];
			data?: AxiosRequestConfig['data'];
			params?: AxiosRequestConfig['params'];
		},
		unknown,
		ApiError
	> =>
	async ({ url, method, data, params }) => {
		const token = localStorage.getItem('token');
		const headers = token ? { Authorization: `Bearer ${token}` } : undefined;

		try {
			const result = await axios({ url: baseUrl + url, method, data, params, headers });

			return { data: result.data };
		} catch (axiosError) {
			let { response } = axiosError as AxiosError<ApiError>;

			if (response?.status === 401) {
				localStorage.removeItem('token');
				window.location.href = '/login';
			}

			return { error: response?.data };
		}
	};

export default axiosBaseQuery;
