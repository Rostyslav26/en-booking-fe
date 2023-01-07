import { z } from 'zod';

export const LoginFormSchema = z.object({
	email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' })
		.max(20, { message: 'Password must be at most 20 characters' }),
	rememberMe: z.boolean().optional(),
});

export const RegisterFormSchema = z
	.object({
		email: z.string().email('Please enter a valid email address').min(1, 'Email is required'),
		password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
		confirmedPassword: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' })
			.max(20, { message: 'Password must be at most 20 characters' }),
		firstName: z
			.string()
			.min(1, 'First name is required')
			.max(20, { message: 'First name must be at most 20 characters' }),
		lastName: z.string().min(1, 'Last name is required'),
	})
	.refine((data) => data.password === data.confirmedPassword, {
		message: 'Passwords do not match',
		path: ['confirmedPassword'],
	});
