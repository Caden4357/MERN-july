import React, {useState} from 'react';

const FeaturedProducts = ({products}) => {
    // ! instead of destructuring props here we can do it in the function signature
    // const {products} = props;
    return (
        <div>
            <h2 className='text-center my-5'>Featured Products</h2>
            <div className='d-flex flex-wrap justify-content-around gap-3'>
                {
                    products.map((product) => (
                        <div className='border border-2-solid-white w-25 text-center'>
                            <h2>{product.name}</h2>
                            <img className='w-100 h-50' src={product.image} alt="Product image" />
                            <h3>${product.price}</h3>
                            <p>{product.description}</p>
                            <p>Sold by: {product.seller}</p>
                        </div>
                    ))
                }
            </div>
        </div>
)}

export default FeaturedProducts;