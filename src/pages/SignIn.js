import React, { useState, useContext } from 'react';
import { AuthContext } from 'context/AuthContext';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SignIn() {
	const { handleSubmit, register } = useForm();
	const [error, toggleError] = useState(false);
	const [success, toggleSuccess] = useState(false);
	const { logIn } = useContext(AuthContext);
	const host = 'http://localhost:3000';

	async function onFormSubmit(data) {
		toggleError(false);
		console.log('data before request', data);

		try {
			const result = await axios.post(`${host}/login`, data);
			console.log('result after request', result);

			logIn(result.data.accessToken);
			toggleSuccess(true);
			// timout > history.push('/profile)
		} catch (e) {
			console.error(e);
			toggleError(true);
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<fieldset>
					<legend>Sign in</legend>
					{success ? (
						<h2>Inloggen gelukt! Je wordt nu doorgestuurd.</h2>
					) : (
						<>
							<label htmlFor="email">
								E-mail
								<input
									type="email"
									name="email"
									id="email"
									{...register('email')}
								/>
							</label>
							<label htmlFor="password">
								Password
								<input
									type="password"
									name="password"
									id="password"
									{...register('password')}
								/>
							</label>
							<button className="submit-btn" type="submit">
								Sign in
							</button>{' '}
						</>
					)}
					{error && <p>Inloggen mislukt. Probeer het opnieuw.</p>}
				</fieldset>
			</form>
		</div>
	);
}
