import React, {useState, useEffect, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { userContext } from '../context/userContext';
const Register = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const navigate = useNavigate();
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        city: '',
        state: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const changeHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        axios.get('http://ip-api.com/json/')
            .then((res) => {
                console.log(res);
                setUser({
                    ...user,
                    city: res.data.city,
                    state: res.data.regionName,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/registerUser', user, {withCredentials: true})
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
            <h2 className='text-white text-4xl text-center'>Register</h2>
            <form onSubmit={submitHandler} className='w-2/12 mx-auto mt-40'>
                <input type="text" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.firstName} placeholder='First Name' name="firstName"/>
                <input type="text" name="lastName" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.lastName} placeholder='Last Name' />
                <input type="text" name="email" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.email} placeholder='Email' />
                <input type="text" name="password" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.password} placeholder='Password' />

                <input type="text" name="confirmPassword" className='w-full block my-4 text-black p-2 rounded border-0 text-xl' onChange={changeHandler} value={user.confirmPassword} placeholder='Confirm Password' />

                <button className='border-2 text-red-50 p-2 block mx-auto'>Register</button>
                <br />
                <Link className='text-white' to={'/'}>Already have an account? Login here</Link>
            </form>
        </div>
)}

export default Register;