import React, {useState} from 'react';
import homepageImg from '../assets/homepage-img.jpg';

const HomepageImage = (props) => {
    return (
        <img className='w-100 height-75' src={homepageImg} alt="Hero Image" />
)}

export default HomepageImage;