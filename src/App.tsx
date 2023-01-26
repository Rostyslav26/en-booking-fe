import { ChakraProvider, theme } from '@chakra-ui/react';
import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Settings from './pages/Settings';
import Header from './components/common/header/Header';
import LoginModal from './components/common/header/LoginModal';
import BlockedRoute from './components/BlockedRoute';
import RegisterModal from './components/common/header/RegisterModal';
import useAuth from './hooks/useAuth';

export const App = () => {
	const { isAuthenticated } = useAuth(); // FIX ME - this is not working

	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<BlockedRoute redirectTo='/' isAllowed={!isAuthenticated} />}>
						<Route path='/login' element={<LoginModal />} />
						<Route path='/register' element={<RegisterModal />} />
					</Route>
					<Route element={<BlockedRoute redirectTo='/login' isAllowed={isAuthenticated} />}>
						<Route path='/settings' element={<Settings />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ChakraProvider>
	);
};
