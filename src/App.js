import { Route, Switch } from 'react-router-dom';
import NavBar from 'components/NavBar/NavBar';
import Profile from 'pages/Profile';
import SignUp from 'pages/SignUp';
import SignIn from 'pages/SignIn';
import Home from 'pages/Home';
import './App.css';

function App() {


	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/sign-up">
					<SignUp />
				</Route>
				<Route path="/sign-in">
					<SignIn />
				</Route>
			</Switch>
		</>
	);
}

export default App;
