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
		<NavLink to='/home' activeStyle>
		home
		</NavLink>
		<NavLink to='/bookingForm' activeStyle>
		bookingForm
		</NavLink>
		<NavLink to='/studentForm' activeStyle>
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
