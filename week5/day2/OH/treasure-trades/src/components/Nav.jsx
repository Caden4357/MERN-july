import React, {useState} from 'react';
import {Link} from 'react-router-dom';
const Nav = (props) => {
    return (
        <header className='border-bottom border-2px-solid-white'>
            <nav className='d-flex align-items-center justify-content-around'>
                <h1>Treasure Trades</h1>
                <div className='w-25 d-flex justify-content-between'>
                    <Link to="/">Home</Link>
                    <Link to="/">All Products</Link>
                    <Link to="/sellProduct">Sell Something</Link>
                </div>
            </nav>
        </header>
)}

export default Nav;