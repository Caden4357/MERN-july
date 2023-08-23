import React, {useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';
const Dashboard = (props) => {
    const {loggedInUser, setLoggedInUser} = useContext(userContext);
    const id = window.localStorage.getItem('userId');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/loggedInUser/${id}`, {withCredentials: true})
            .then((res) => {
                console.log(res);
                setLoggedInUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2 className='text-white text-4xl text-center'>Hello {loggedInUser?.firstName}</h2>
        </div>
)}

export default Dashboard;