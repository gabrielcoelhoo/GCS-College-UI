
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../src/components/Navbar'

import Users from '../src/components/Users'
import UserCreate from '../src/pages/UserCreate'
import UserUpdate from '../src/pages/UserUpdate'

import Courses from '../src/components/Courses'
import CourseCreate from '../src/pages/CourseCreate'
import CourseUpdate from '../src/pages/CourseUpdate'

import Employees from '../src/components/Employees'
import EmployeeCreate from '../src/pages/EmployeeCreate'
import EmployeeUpdate from '../src/pages/EmployeeUpdate'

export default function App() {
	return (
		<Router>
		  <div>
			<Navbar />
			<Switch>
			  <Route exact path='/' component={Users} />
			  <Route exact path='/create' component={UserCreate} />
			  <Route exact path='/update/:id' component={UserUpdate} />

			  <Route exact path='/courses' component={Courses} />
			  <Route exact path='/coursecreate' component={CourseCreate} />
			  <Route exact path='/courseupdate/:id' component={CourseUpdate} />

			  <Route exact path='/employees' component={Employees} />
			  <Route exact path='/createEmployee' component={EmployeeCreate} />
			  <Route exact path='/employeeUpdate/:id' component={EmployeeUpdate} />
			</Switch>
		  </div>
		</Router>
	  );
	}