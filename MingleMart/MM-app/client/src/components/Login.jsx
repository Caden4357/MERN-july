import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../context/userContext';
const Login = (props) => {
    const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/loginUser', user, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setLoggedInUser(res.data);
                window.localStorage.setItem('userId', res.data._id);
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h2 className='text-white text-4xl text-center'>Login</h2>
            <form onSubmit={submitHandler} className='w-2/12 mx-auto mt-40'>
                <input type="text" name="email" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.email} placeholder='Email' />
                <input type="text" name="password" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.password} placeholder='Password' />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded text-xl'>Login</button>
                <br />
                <Link to='/register' className='text-blue-500 text-xl'>Dont have an account? Register here</Link>
            </form>
        </div>
    )
}

export default Login;