import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginModal from 'components/common/header/LoginModal';
import RegisterModal from 'components/common/header/RegisterModal';
import AuthenticatedBlockedRoute from 'components/AuthenticatedBlockedRoute';

import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'login',
				element: <AuthenticatedBlockedRoute component={LoginModal} path='/login' />,
			},
			{
				path: 'register',
				element: <AuthenticatedBlockedRoute component={RegisterModal} path='/register' />,
			},
		],
	},
]);

export const App = () => (
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>
);
