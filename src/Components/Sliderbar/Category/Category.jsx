import React from 'react';
import './Category.css'
import Input from '../../Share/Input';

const Category = () => {
    return (
        <div>
            <h2 className='sidebar-title'>Category</h2>
            <div>
                {/* <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span>All
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span>Sneakers
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span>Flats
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span>Sandals
                </label>
                <label className='sidebar-label-container'>
                    <input type="radio" name='test' />
                    <span className='checkmark'></span>Heels
                </label> */}
              <Input></Input>
            </div>
        </div>

    );
};

export default Category;