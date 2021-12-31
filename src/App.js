import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import CoursesForm from './pages/CoursesForm';
import StudentForm from './pages/studentForm';
import Allcourses from './pages/Allcourses';
import Courseschanges from './pages/Courseschanges';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>	
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/CoursesForm' component={CoursesForm}/>
        <Route exact path='/StudentForm' component={StudentForm}/> 
		<Route exact path='/Allcourses' component={Allcourses}/> 
		<Route exact path='/Courseschanges' component={Courseschanges}/>

	</Switch>
	</Router>
);
}

export default App;
