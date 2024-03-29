import React from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';

interface BlockedRouterProps {
	redirectTo: string;
	isAllowed: boolean;
}

type Props = BlockedRouterProps & RouteProps;

const BlockedRoute: React.FC<Props> = ({ redirectTo, isAllowed, ...rest }) => {
	if (!isAllowed) {
		return <Navigate to={redirectTo} replace />;
	}

	return <Outlet />;
};

export default BlockedRoute;