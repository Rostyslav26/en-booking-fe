import { Alert, AlertIcon, Button, Checkbox, Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { ILoginRequest } from 'types/auth.model';

import FormField from 'components/common/ui/form/FormField';

import { useLoginMutation } from 'store/api';

import { LoginFormSchema } from './validations';

interface LoginFormProps {
	onSuccess: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
	const form = useForm<ILoginRequest>({ resolver: zodResolver(LoginFormSchema) });
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = form;

	const [login, { error }] = useLoginMutation();

	const onSubmit = handleSubmit(async (values) => {
		const result = await login(values).unwrap();
		onSuccess(result.token);
	});

	return (
		<FormProvider {...form}>
			<form onSubmit={onSubmit}>
				<FormField name='email' label='Email' type='email' />
				<FormField name='password' label='Password' type='password' />

				<Flex justifyContent='space-between'>
					<Checkbox {...register('rememberMe')}>Remember me</Checkbox>
					<Button variant='link' size='sm' colorScheme='pink'>
						Forgot password?
					</Button>
				</Flex>

				{error && (
					<Alert mt={2} status='error'>
						<AlertIcon />
						{error.message}
					</Alert>
				)}
				<Button type='submit' colorScheme='pink' mt={5} isLoading={isSubmitting}>
					Sign in
				</Button>
			</form>
		</FormProvider>
	);
};

export default LoginForm;
