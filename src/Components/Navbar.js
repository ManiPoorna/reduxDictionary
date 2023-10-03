import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='app-heading'>
				<h1>Dictionary App</h1>
			</div>
			<div className='links'>
				<div><NavLink to="/reduxDictionary">Home</NavLink></div>
				<div><NavLink to="/history">History</NavLink></div>
			</div>
		</div>
	)
}

export default Navbar