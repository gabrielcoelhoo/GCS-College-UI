
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

import Enrolments from '../src/components/Enrolments'
import EnrolmentCreate from '../src/pages/EnrolmentCreate'
import EnrolmentUpdate from '../src/pages/EnrolmentUpdate'

export default function App() {
	return (
		<Router>
		  <div>
			<Navbar />
			<Switch>
			  <Route exact path='/users' component={Users} />
			  <Route exact path='/create' component={UserCreate} />
			  <Route exact path='/update/:id' component={UserUpdate} />

			  <Route exact path='/courses' component={Courses} />
			  <Route exact path='/coursecreate' component={CourseCreate} />
			  <Route exact path='/courseupdate/:id' component={CourseUpdate} />

			  <Route exact path='/employees' component={Employees} />
			  <Route exact path='/employeecreate' component={EmployeeCreate} />
			  <Route exact path='/employeeupdate/:id' component={EmployeeUpdate} />

			  <Route exact path='/enrolments' component={Enrolments} />
			  <Route exact path='/enrolmentcreate' component={EnrolmentCreate} />
			  <Route exact path='/enrolmentupdate/:id' component={EnrolmentUpdate} />
			</Switch>
		  </div>
		</Router>
	  );
	}