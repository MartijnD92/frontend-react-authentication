import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

export default function SignUp() {
	const { handleSubmit, register } = useForm();
	const [error, toggleError] = useState(false);
	const [success, toggleSuccess] = useState(false);

	async function onFormSubmit(data) {
		toggleError(false);
		console.log('data before request', data);
		try {
			const result = await axios.post('http://localhost:3000/register', data);
			console.log('result', result);
			toggleSuccess(true);
		} catch (e) {
			console.error(e);
			toggleError(true);
		}
	}

	return (
		<div className="container">
			<form onSubmit={handleSubmit(onFormSubmit)}>
				<fieldset>
					<legend>Sign up</legend>
					{success ? (
						<h2>Registratie gelukt!</h2>
					) : (
						<>
							<label htmlFor="username">
								Username
								<input
									type="text"
									name="username"
									id="username"
									{...register('username')}
								/>
							</label>
							<label htmlFor="email">
								Email
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
								Sign up
							</button>{' '}
						</>
					)}
					{error && <p>Er is een fout opgetreden. Probeer het opnieuw.</p>}
				</fieldset>
			</form>
		</div>
	);
}
