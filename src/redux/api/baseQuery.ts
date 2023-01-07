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
		try {
			const result = await axios({ url: baseUrl + url, method, data, params });

			return { data: result.data };
		} catch (axiosError) {
			let { response } = axiosError as AxiosError<ApiError>;

			return { error: response?.data };
		}
	};

export default axiosBaseQuery;
