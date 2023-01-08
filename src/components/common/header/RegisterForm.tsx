import { Alert, AlertIcon, Button } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import Field from 'components/common/ui/form/Field';

import { useRegisterMutation } from 'store/api';

import { IRegisterRequest } from 'types/auth.model';

import { RegisterFormSchema } from './validations';

interface RegisterFormProps {
	onSuccess: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
	const form = useForm<IRegisterRequest>({ resolver: zodResolver(RegisterFormSchema) });
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = form;
	const [registerUser, { error: apiError }] = useRegisterMutation();

	useEffect(() => {
		form.reset();
	}, [form]);

	const onSubmit = handleSubmit(async (values) => {
		await registerUser(values).unwrap();
		onSuccess();
	});

	return (
		<form onSubmit={onSubmit}>
			<Field {...register('email')} label='Email' type='email' error={errors.email} />
			<Field {...register('password')} label='Password' type='password' error={errors.password} />
			<Field
				{...register('confirmedPassword')}
				label='Confirmed password'
				type='password'
				error={errors.confirmedPassword}
			/>
			<Field {...register('firstName')} label='First name' error={errors.firstName} />
			<Field {...register('lastName')} label='Last name' error={errors.firstName} />

			{apiError && (
				<Alert mt={2} status='error'>
					<AlertIcon />
					{apiError?.message}
				</Alert>
			)}

			<Button type='submit' colorScheme='pink' mt={5} isLoading={isSubmitting}>
				Register
			</Button>
		</form>
	);
};

export default RegisterForm;
