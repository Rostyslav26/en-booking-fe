import React from 'react';
import { Navigate, RouteProps } from 'react-router-dom';

interface BlockedRouterProps {
	component: React.ComponentType;
	redirectTo: string;
	isAllowed: boolean;
}

type Props = BlockedRouterProps & RouteProps;

const BlockedRoute: React.FC<Props> = ({ component: Component, redirectTo, isAllowed, ...rest }) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} replace />;
	}

	return (
		<Component />
	);
};

export default BlockedRoute;