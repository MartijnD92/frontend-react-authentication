import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
	return (
		<ul className="nav-bar">
			<li>
				<NavLink exact to="/" activeClassName="selected">
					Home
				</NavLink>
			</li>
			<li>
				<NavLink to="/profile" activeClassName="selected">
					Profile
				</NavLink>
			</li>
			<li>
				<NavLink exact to="/sign-up" activeClassName="selected">
					Sign up
				</NavLink>
			</li>
			<li>
				<NavLink to="/sign-in" activeClassName="selected">
					Sign in
				</NavLink>
			</li>
		</ul>
	);
}
