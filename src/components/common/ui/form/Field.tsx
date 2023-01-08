import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import React, { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: FieldError;
	label?: string;
	name: string;
}

const Field = forwardRef<HTMLInputElement, FieldProps & InputProps>(({ error, name, label, ...rest }, ref) => {
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input id={name} {...rest} ref={ref} />
			<FormErrorMessage>{error?.message}</FormErrorMessage>
		</FormControl>
	);
});

export default Field;
