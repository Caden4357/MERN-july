import React, {useState} from 'react';
import { Link } from 'react-router-dom';
const Nav = (props) => {
    return (
        <header>
            <nav>
                <h1>Routing</h1>
                <Link className='text-white' to={'/'}>Landing Page</Link>
                <br />
                <Link className='text-white' to={'/home'}>Home</Link>
            </nav>
        </header>
    )}
export default Nav;