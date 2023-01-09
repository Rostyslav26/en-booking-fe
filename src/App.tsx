import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginModal from 'components/common/header/LoginModal';
import RegisterModal from 'components/common/header/RegisterModal';

import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
		children: [
			{
				path: 'login',
				element: <LoginModal />,
			},
			{
				path: 'register',
				element: <RegisterModal />,
			},
		],
	},
]);

export const App = () => (
	<ChakraProvider theme={theme}>
		<RouterProvider router={router} />
	</ChakraProvider>
);
