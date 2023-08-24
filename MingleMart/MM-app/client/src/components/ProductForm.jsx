import React, {useState, useEffect} from 'react';
import axios from 'axios';
const ProductForm = (props) => {
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
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('price', product.price);
        formData.append('image', product.image);
        formData.append('city', product.city);
        formData.append('state', product.state);
        formData.append('description', product.description);
        formData.append('category', product.category);
        // ! Start day3 here! Check routes and controllers
        axios.post('http://localhost:8000/api/products', formData, {withCredentials: true})
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err.response);
            });
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
                <button className='border-2 text-red-50 p-2 block mx-auto'>Register</button>
            </form>
        </div>
)}

export default ProductForm;