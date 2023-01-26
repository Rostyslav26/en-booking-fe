import { useEffect, useState } from 'react';

const useAuth = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, [localStorage.getItem('token')]);

	return { isAuthenticated };
}

export default useAuth;