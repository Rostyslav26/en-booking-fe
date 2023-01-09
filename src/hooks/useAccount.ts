import { IUser } from 'types/auth.model';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyGetUserQuery } from 'store/api';

const useAccount = (): [IUser | null, () => void] => {
	const [fetchUser, { error }] = useLazyGetUserQuery();
	const [user, setUser] = useState<IUser | null>(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('token')) {
			fetchUser().unwrap().then((res) => {
				if (error) {
					localStorage.removeItem('token');
					navigate('/login');
				} else {
					setUser(res);
				}
			});
		}
	}, [localStorage.getItem('token')]);

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		navigate('/');
	};

	return [user, logout];
};

export default useAccount;
