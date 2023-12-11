import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='container'>
            <NavLink to={"/"}>Home</NavLink >
            <NavLink to={"/about"}>about</NavLink >
        </div>
    )
}

export default Navbar