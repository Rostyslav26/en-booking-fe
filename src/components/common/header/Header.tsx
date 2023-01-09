import {
	Avatar,
	Box,
	Button,
	Container,
	Flex,
	Menu,
	MenuButton,
	MenuDivider,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import useAccount from 'hooks/useAccount';
import { SettingsIcon } from '@chakra-ui/icons';

const Header: React.FC = () => {
	const navigate = useNavigate();
	const [user, logout] = useAccount();

	return (
		<Box shadow='base' bg='white'>
			<Container maxW='container.xl' pt={2} pb={2} alignItems='center'>
				<Flex justifyContent='space-between'>
					<Text as='h1' fontSize='2xl' color='pink.600' fontWeight='bold'>
						EnBook
					</Text>
					{user ? (
						<Menu size='xl'>
							<MenuButton sx={{cursor: 'pointer'}} display='block' size='sm' as={Avatar} name={user.firstName} src={user.imageUrl} />
							<MenuList>
								<MenuDivider />
								<MenuItem icon={<SettingsIcon />} onClick={() => navigate('/settings')}>Settings</MenuItem>
								<MenuItem onClick={logout}>Logout</MenuItem>
							</MenuList>
						</Menu>
					) : (
						<Button variant='outline' colorScheme='pink' onClick={() => navigate('/login')}>
							Sign in
						</Button>
					)}
				</Flex>
			</Container>
			<Outlet />
		</Box>
	);
};

export default Header;
