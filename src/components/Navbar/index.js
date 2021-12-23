import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/home'>
		home
		</NavLink>
		<NavLink to='/CoursesForm'>
		CoursesForm
		</NavLink>
		<NavLink to='/studentForm'>
		studentForm
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/login'>Log In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
