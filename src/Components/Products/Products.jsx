import React from 'react';
import './Products.css'

import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import Card from '../Share/Card';

const Products = ({ result }) => {
    return (
        <section className='card-container'>
            {result}



        </section>
    );
};

export default Products;