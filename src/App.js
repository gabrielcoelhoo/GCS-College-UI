import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import BookingForm from './pages/BookingForm';
import StudentForm from './pages/StudentForm';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/BookingForm' component={BookingForm}/>
        <Route path='/StudentForm' component={StudentForm}/>
      </Routes>
    </Router>
  );
}

export default App;
