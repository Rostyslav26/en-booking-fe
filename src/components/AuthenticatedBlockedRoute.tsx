import BlockedRoute from './BlockedRoute';
import React from 'react';
import { RouteProps } from 'react-router-dom';

interface AuthenticatedBlockedRouterProps {
	component: React.ComponentType;
}

type Props = AuthenticatedBlockedRouterProps & RouteProps;

const AuthenticatedBlockedRoute: React.FC<Props > = ({ component: Component, ...rest }) => {
	const isAllowed = localStorage.getItem('token') !== null;

	return (
		<BlockedRoute component={Component} redirectTo='/' isAllowed={!isAllowed} {...rest} />
	);
};

export default AuthenticatedBlockedRoute;