import { useState } from "react";

type AuthUser = {
	name: string;
	email: string;
};

const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			name: "Apel Mahmud",
			email: "apel@example.com",
		});
	};
	const handleLogout = () => {
		setUser(null);
	};

	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {user?.name}</div>
			<div>User name is {user?.email}</div>
			<div>User email is </div>
		</div>
	);
};

export default User;
