/* Dependencies */
/* -------------------------------*/

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';

import Search from './pages/Search';
import Saved from './pages/Saved';

/* MAIN */
/* -------------------------------*/

export default function App() {
	return (
		<Router>
			<React.Fragment>
				<Nav />
				<Jumbotron />
				<Switch>
					<Route exact path='/'>
						<Search />
					</Route>
					<Route exact path='/api/books'>
						<Saved />
					</Route>
					{/* <Route exact path='*'>
						<This is here for testing purposes />
					</Route> */}
				</Switch>
			</React.Fragment>
		</Router>
	);
}
