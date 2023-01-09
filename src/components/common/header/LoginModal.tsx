import {
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import LoginForm from 'components/common/header/LoginForm';

const LoginModal = () => {
	const navigate = useNavigate();
	const { onClose } = useDisclosure();

	const onSignUp = async () => {
		onClose();
		navigate('/register');
	};

	const closeModal = () => {
		onClose();
		navigate('/');
	};

	const onSuccessfulLogin = (token: string) => {
		localStorage.setItem('token', token);
		closeModal();
	};

	return (
		<Modal isOpen isCentered onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Flex flexDirection='column' alignItems='center'>
						<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>EnBook</Text>
						<Text fontSize='sm'>Don't have an account?</Text>
						<Button onClick={onSignUp} variant='link' size='sm' colorScheme='pink'>Sign up</Button>
					</Flex>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody mb={2}>
					<LoginForm onSuccess={onSuccessfulLogin} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
