import React, {useState} from 'react';
import {Link} from 'react-router-dom'
const Nav = (props) => {
    return (
        <header>
            <nav className='d-flex justify-content-around align-items-center'>
                <h1>IADb</h1>
                <div className='d-flex justify-content-around w-25'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/'}>New Album</Link>
                    <Link to={'/'}>About</Link>
                </div>
            </nav>
        </header>
)}

export default Nav;