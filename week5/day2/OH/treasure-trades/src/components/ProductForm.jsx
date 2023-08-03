import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
const ProductForm = ({products, setProducts}) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({
        name:'',
        price:0,
        description:'',
        image:'',
        seller:''
    })
    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setProduct({...product, [e.target.name]: e.target.value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        // ! We want to... 
        // 1.) add the product to the product list 
        setProducts([...products, product])
        // 2.) redirect the user to the homepage
        navigate('/')

    }
    return (
        <div>
            <h2 className='text-center'>Sell A Product</h2>
            <form onSubmit={submitHandler} className='w-50 mx-auto'>
                <div className="form-group">
                    <label className='form-label'>Product Name:</label>
                    <input className="form-control" type="text" name='name' onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label className='form-label'>Price:</label>
                    <input className="form-control" type="number" step={0.01} name='price' onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label className='form-label'>Description:</label>
                    <textarea className="form-control" name="description" onChange={changeHandler}></textarea>
                </div>
                <div className="form-group">
                    <label className='form-label'>Image:</label>
                    <input className="form-control" type="text" name='image' onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label className='form-label'>Seller:</label>
                    <input className="form-control" type="text" name='seller' onChange={changeHandler}/>
                </div>
                <button>Add Product</button>
            </form>
        </div>
)}

export default ProductForm;