import { IUser } from 'types/auth.model';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetUserQuery } from 'store/api';

const useAccount = (): [IUser | null, () => void] => {
	const [fetchUser, { data }] = useLazyGetUserQuery();
	const [user, setUser] = useState<IUser | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			fetchUser();
		}
	}, [localStorage.getItem('token')]);

	useEffect(() => {
		if (data) {
			setUser(data);
		}
	}, [data]);

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		navigate('/');
	};

	return [user, logout];
};

export default useAccount;
