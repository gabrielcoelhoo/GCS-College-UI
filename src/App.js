
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../src/components/Navbar'
import Users from '../src/components/Users'
import UserCreate from '../src/pages/UserCreate'
import UserUpdate from '../src/pages/UserUpdate'

export default function App() {
	return (
		<Router>
		  <div>
			<Navbar />
			<Switch>
			  <Route exact path='/' component={Users} />
			  <Route exact path='/create' component={UserCreate} />
			  <Route exact path='/update/:id' component={UserUpdate} />
			</Switch>
		  </div>
		</Router>
	  );
	}