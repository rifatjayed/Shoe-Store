import React from 'react';
import './Sidebar.css'
import { BsCart4 } from "react-icons/bs";
import Category from '../Category/Category';
import Color from '../Color/Color';
import Price from '../Price/Price';



const Sidebar = ({handleChange}) => {
    console.log(handleChange)
    return (
        <div className='sidebar'>
            <div className="logo-container">
                <h1><BsCart4 />
                </h1>
            </div>
            <Category handleChange={handleChange}></Category>
            <Price handleChange={handleChange}></Price>
            <Color handleChange={handleChange}></Color>
        </div>
    );
};

export default Sidebar;