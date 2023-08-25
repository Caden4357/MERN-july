import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../context/userContext';
import axios from 'axios';
const Dashboard = (props) => {
    const [products, setProducts] = useState([]);
    const { loggedInUser, setLoggedInUser } = useContext(userContext);
    const id = window.localStorage.getItem('userId');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/loggedInUser/${id}`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                setLoggedInUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products', { withCredentials: true })
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h2 className='text-white text-4xl text-center'>Hello {loggedInUser?.firstName}</h2>
            <h2 className='text-white text-4xl text-center'>Your Located In {loggedInUser?.city}, {loggedInUser?.state}</h2>
            <div className='flex justify-around flex-wrap'>
                {
                    products.map((product) => (
                        <div key={product._id} className='border my-4'>
                            <Link to={`/product/${product._id}`}>
                                <h2 className='text-white text-4xl text-center'>{product.name}</h2>
                                <img className='w-80 h-80 object-cover' src={product.image} alt="Product Image" />
                                <p className='text-center text-white'>Sold By: {product.userId.firstName}</p>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dashboard;