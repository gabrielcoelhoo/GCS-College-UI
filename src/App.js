
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from '../src/components/Navbar'

import Home from '../src/pages/Home'

import Login from '../src/pages/Login'

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

import AvailableCourses from "./pages/AvailableCourses";
import AvailableExtras from "./pages/AvailableExtras";

import EnrolmentReport from "./pages/EnrolmentReport";



export default function App() {
	return (
		<Router>
		  <div>
			<Navbar />
			<Switch>

			<Route exact path='/' component={Home} />

			<Route exact path='/login' component={Login} />

			  <Route exact path='/users' component={Users} />
			  <Route exact path='/usercreate' component={UserCreate} />
			  <Route exact path='/userupdate/:id' component={UserUpdate} />

			  <Route exact path='/courses' component={Courses} />
			  <Route exact path='/coursecreate' component={CourseCreate} />
			  <Route exact path='/courseupdate/:id' component={CourseUpdate} />

			  <Route exact path='/employees' component={Employees} />
			  <Route exact path='/employeecreate' component={EmployeeCreate} />
			  <Route exact path='/employeeupdate/:id' component={EmployeeUpdate} />

			  <Route exact path='/enrolments' component={Enrolments} />
			  <Route exact path='/enrolmentcreate' component={EnrolmentCreate} />
			  <Route exact path='/enrolmentupdate/:id' component={EnrolmentUpdate} />

				
			  <Route exact path='/availablecourses' component={AvailableCourses} />
			  <Route exact path='/availableextras' component={AvailableExtras} />

			  <Route exact path='/enrolmentreport' component={EnrolmentReport} />



			  <Route
                path="/logout"
                exact
                component={() => (
                  <Login message="User Logged Out Successfully." />
                )}
              />
			</Switch>
		  </div>
		</Router>
	  );
	}