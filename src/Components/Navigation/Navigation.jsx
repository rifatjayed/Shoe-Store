import React from 'react';
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import "./Navigation.css"



const Navigation = () => {
    return (
        <nav className=''>
            <div>
                <input type="text" className='search-input' placeholder='Enter your shoes' />
            </div>

            <div className='profile-container'>
                <a>
                    <FiHeart  className='nav-icons'/>
                </a>
                <a>
                    <AiOutlineShoppingCart  className='nav-icons'/>
                </a>
                <a>
                    < AiOutlineUser className='nav-icons'/>
                </a>
            </div>
        </nav>

    );
};

export default Navigation;