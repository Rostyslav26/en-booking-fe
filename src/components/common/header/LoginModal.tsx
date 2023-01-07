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
} from '@chakra-ui/react';
import React from 'react';

import LoginForm from 'components/common/header/LoginForm';

interface LoginModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSignUp: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onSignUp }) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />

			<ModalContent>
				<ModalHeader>
					<Flex flexDirection='column' alignItems='center'>
						<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>
							EnBook
						</Text>
						<Text fontSize='sm'>Don't have an account?</Text>
						<Button onClick={onSignUp} variant='link' size='sm' colorScheme='pink'>
							Sign up
						</Button>
					</Flex>
				</ModalHeader>

				<ModalCloseButton />

				<ModalBody mb={2}>
					<LoginForm onSuccess={onClose} />
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default LoginModal;
