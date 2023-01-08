import { Alert, AlertIcon, Button, Checkbox, Flex } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import Field from 'components/common/ui/form/Field';

import { useLoginMutation } from 'redux/api';

import { ILoginRequest } from 'types/auth.model';

import { LoginFormSchema } from './validations';

interface LoginFormProps {
	onSuccess: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
	const form = useForm<ILoginRequest>({ resolver: zodResolver(LoginFormSchema) });
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = form;

	const [login, { error: apiError }] = useLoginMutation();

	const onSubmit = handleSubmit(async (values) => {
		const result = await login(values).unwrap();
		onSuccess(result.token);
	});

	return (
		<form onSubmit={onSubmit}>
			<Field {...register('email')} label='Email' type='email' error={errors.email} />
			<Field {...register('password')} label='Password' type='password' error={errors.password} />

			<Flex justifyContent='space-between'>
				<Checkbox {...register('rememberMe')}>Remember me</Checkbox>
				<Button variant='link' size='sm' colorScheme='pink'>
					Forgot password?
				</Button>
			</Flex>

			{apiError && (
				<Alert mt={2} status='error'>
					<AlertIcon />
					{apiError.message}
				</Alert>
			)}
			<Button type='submit' colorScheme='pink' mt={5} isLoading={isSubmitting}>
				Sign in
			</Button>
		</form>
	);
};

export default LoginForm;
