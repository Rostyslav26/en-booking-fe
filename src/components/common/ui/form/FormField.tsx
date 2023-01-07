import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from '@chakra-ui/react';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps extends InputProps {
	name: string;
	label: string;
	required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({ label, required, name, ...props }) => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<FormControl isInvalid={!!errors[name]} mb={2}>
			<FormLabel htmlFor={name}>{label}</FormLabel>
			<Input {...register(name)} name={name} {...props} required={required} />
			<FormErrorMessage>{errors[name]?.message?.toString()}</FormErrorMessage>
		</FormControl>
	);
};

export default FormField;
