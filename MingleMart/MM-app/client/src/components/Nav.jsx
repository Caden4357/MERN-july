import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
const Nav = (props) => {
    const navigate = useNavigate();

    const logout = () => {
        axios.post('http://localhost:8000/api/logoutUser', {}, { withCredentials: true })
            .then((res) => {
                console.log(res);
                window.localStorage.removeItem('userId');
                navigate('/');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <header>
                <nav className='flex justify-between items-center p-4'>
                    <h1 className='text-4xl text-center text-white'>Welcome to Mingle Mart</h1>
                    <div className="flex justify-around items-center w-3/12">
                        <Link className='bg-slate-300 p-2 rounded-lg text-lg ' to={'/dashboard'}>Dashboard</Link>
                        <Link className='bg-slate-300 p-2 rounded-lg text-lg ' to={`/`}>Profile</Link>
                        <Link className='bg-blue-300 p-2 rounded-lg text-lg' to={'/sellProduct'} >Sell Your Stuff</Link>
                        <button className='bg-pink-300 p-2 rounded-lg text-lg ' onClick={logout}>Logout</button>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Nav;