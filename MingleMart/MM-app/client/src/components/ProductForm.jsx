import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Loading from './Loading';
const ProductForm = (props) => {
    const navigate = useNavigate();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [product, setProduct] = useState({
        name: '',
        price:'',
        image:'',
        city:'',
        state:'',
        description:'',
        category:'Electronics',
    });

    useEffect(() => {
        axios.get('http://ip-api.com/json/')
            .then((res) => {
                setProduct({
                    ...product,
                    city: res.data.city,
                    state: res.data.regionName,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    const changeHandler = (e) => {
        const {name, value} = e.target;
        if(e.target.name === 'image'){
            const image = e.target.files[0];
            setProduct({
                ...product,
                [name]: image,
            });
        }else{
            setProduct({
                ...product,
                [name]: value,
            });
        }
    };

    const submitHandler = (e) => {
        setIsSubmitted(true);
        e.preventDefault();
        let formData = new FormData();
        for(let [key, value] of Object.entries(product)){
            formData.append(key, value);
        }
        // !start here
        axios.post('http://localhost:8000/api/createProduct', formData, { withCredentials: true })
            .then((res) => {
                navigate('/dashboard');
            })
            .catch((err) => {
                console.log(err);
            })
    };

    return (
        <div>
            <h1 className='text-4xl text-center text-white'>Sell Your Stuff</h1>
            <form className='w-2/12 mx-auto mt-20' encType='multipart/form-data' onSubmit={submitHandler}>
                <input className='w-full block my-4 text-black p-2 rounded border-0 text-xl' type="text" onChange={changeHandler} value={product.name} name='name' placeholder='Product Name'/>
                <input className='w-full block my-4 text-black p-2 rounded border-0 text-xl' type="text" onChange={changeHandler} value={product.price} name='price' placeholder='Price'/>
                <input type="file" onChange={changeHandler} name='image'/>
                <textarea className='w-full block my-4 text-black p-2 rounded border-0 text-xl' type="text" onChange={changeHandler} value={product.description} name='description' placeholder='Description'></textarea>
                <select className='w-full block my-4 text-black p-2 rounded border-0 text-xl' name="category" onChange={changeHandler} value={product.category}>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Home">Home</option>
                    <option value="Toys">Toys</option>
                    <option value="Sports">Sports</option>
                    <option value="Vehicles">Vehicles</option>
                    <option value="Other">Other</option>
                </select>
                {
                    isSubmitted ? <Loading/> : <button className='border-2 text-red-50 p-2 block mx-auto'>Sell</button>
                }
            </form>
        </div>
)}

export default ProductForm;