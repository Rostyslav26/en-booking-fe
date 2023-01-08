import { createApi } from '@reduxjs/toolkit/query/react';

import { ILoginRequest, ILoginResponse, IRegisterRequest } from 'types/auth.model';

import axiosBaseQuery from './baseQuery';

export const api = createApi({
	reducerPath: 'api',
	baseQuery: axiosBaseQuery(),
	endpoints: (builder) => ({
		logout: builder.mutation({
			query: () => ({
				url: '/logout',
				method: 'POST',
			}),
		}),
		login: builder.mutation<ILoginResponse, ILoginRequest>({
			query: (data) => ({
				url: '/authenticate',
				method: 'POST',
				data,
			}),
		}),
		register: builder.mutation<void, IRegisterRequest>({
			query: (data) => ({
				url: '/user/register',
				method: 'POST',
				data,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = api;
