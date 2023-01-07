import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

const Header: React.FC = () => {
	const navigate = useNavigate();

	return (
		<Box shadow='base' bg='white'>
			<Container maxW='container.xl' pt={2} pb={2} alignItems='center'>
				<Flex justifyContent='space-between'>
					<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>
						EnBook
					</Text>
					<Button variant='outline' colorScheme='pink' onClick={() => navigate('/login')}>
						Sign in
					</Button>
				</Flex>
			</Container>
			<Routes>
				<Route path='/login' element={<LoginModal />} />
				<Route path='/register' element={<RegisterModal />} />
			</Routes>
		</Box>
	);
};

export default Header;
