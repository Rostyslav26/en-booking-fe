import { CheckCircleIcon } from '@chakra-ui/icons';
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
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import RegisterForm from './RegisterForm';

const RegisterModal = () => {
	const [showSuccess, setShowSuccess] = useState(false);
	const navigate = useNavigate();
	const { onClose } = useDisclosure();

	const onSignIn = () => {
		onClose();
		navigate('/login');
	};

	const closeModal = () => {
		onClose();
		navigate('/');
	};

	return (
		<Modal isOpen onClose={closeModal} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>
					<Flex flexDirection='column' alignItems='center'>
						<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>
							EnBook
						</Text>

						{showSuccess ? (
							<Flex alignItems='center'>
								<CheckCircleIcon boxSize='24px' color='green.500' />
								<Text fontSize='sm' ml={2}>
									Check your email for activation
								</Text>
							</Flex>
						) : (
							<>
								<Text fontSize='sm'>Already have an account?</Text>
								<Button onClick={onSignIn} variant='link' size='sm' colorScheme='pink'>
									Sign in
								</Button>
							</>
						)}
					</Flex>
				</ModalHeader>
				<ModalCloseButton />

				{!showSuccess && (
					<ModalBody mb={2}>
						<RegisterForm onSuccess={() => setShowSuccess(true)} />
					</ModalBody>
				)}
			</ModalContent>
		</Modal>
	);
};

export default RegisterModal;
