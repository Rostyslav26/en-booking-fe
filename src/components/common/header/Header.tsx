import { Box, Button, Container, Flex, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header: React.FC = () => {
	const loginModal = useDisclosure();
	const registerModal = useDisclosure();

	const openRegisterModal = () => {
		loginModal.onClose();
		registerModal.onOpen();
	};

	const openLoginModal = () => {
		registerModal.onClose();
		loginModal.onOpen();
	};

	return (
		<Box shadow='base' bg='white'>
			<Container maxW='container.xl' pt={2} pb={2} alignItems='center'>
				<Flex justifyContent='space-between'>
					<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>
						EnBook
					</Text>
					<Button variant='outline' colorScheme='pink' onClick={loginModal.onOpen}>
						Sign in
					</Button>
				</Flex>
			</Container>
			<LoginModal isOpen={loginModal.isOpen} onClose={loginModal.onClose} onSignUp={openRegisterModal} />
			<RegisterModal isOpen={registerModal.isOpen} onClose={registerModal.onClose} onSignIn={openLoginModal} />
		</Box>
	);
};

export default Header;
