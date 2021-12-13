import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import BookingForm from './pages/bookingForm';
import StudentForm from './pages/studentForm';


function App() {
return (
	<Router>
	<Navbar />
	<Switch>	
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/BookingForm' component={BookingForm}/>
        <Route path='/StudentForm' component={StudentForm}/> 
	</Switch>
	</Router>
);
}

export default App;
