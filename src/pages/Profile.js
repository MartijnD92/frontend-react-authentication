import React, { useContext } from 'react';
import { AuthContext } from 'context/AuthContext';

export default function Profile() {
	const { user } = useContext(AuthContext);
	console.log('profile', user?.username)

	return (
		<div className="container">
			<ul>
				<li>Gebruikersnaam: {user && user.username}</li>
				<li>E-mail: {user && user.email}</li>
			</ul>
		</div>
	);
}
