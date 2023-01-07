import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import FormField from 'components/common/ui/form/FormField';

import { useRegisterMutation } from 'redux/api';

import { IRegisterRequest } from 'types/auth.model';

import { RegisterFormSchema } from './validations';

interface RegisterFormProps {
	onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
	const form = useForm<IRegisterRequest>({ resolver: zodResolver(RegisterFormSchema) });
	const {
		handleSubmit,
		formState: { isSubmitting },
	} = form;
	const [registerUser, { error }] = useRegisterMutation();

	useEffect(() => {
		form.reset();
	}, [form]);

	const onSubmit = handleSubmit(async (values) => {
		await registerUser(values).unwrap();
		onSuccess();
	});

	return (
		<FormProvider {...form}>
			<form onSubmit={onSubmit}>
				<FormField name='email' label='Email' type='email' />
				<FormField name='password' label='Password' type='password' />
				<FormField name='confirmedPassword' label='Confirmed password' type='password' />
				<FormField name='firstName' label='First name' />
				<FormField name='lastName' label='Last name' />

				{error && (
					<Alert mt={2} status='error'>
						<AlertIcon />
						{error?.message}
					</Alert>
				)}

				<Button type='submit' colorScheme='pink' mt={5} isLoading={isSubmitting}>
					Register
				</Button>
			</form>
		</FormProvider>
	);
};

export default RegisterForm;
