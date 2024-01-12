import React from 'react';
import './Color.css'
import Input from '../../Share/Input';

const Color = ({handleChange}) => {
    return (
        <div>
           

         
            <h2 className='sidebar-title color-title'>Colors</h2>
            <label className='sidebar-label-container'>
                    <input onChange={handleChange} type="radio" value="" name="test3" />
                    <span className='checkmark'></span>All
                </label>


                
                <Input handleChange={handleChange}
                    value="black"
                    title="Black"
                    name="test3"
                    color="black"
                ></Input>

                <Input handleChange={handleChange}
                    value="blue"
                    title="Blue"
                    name="test3"
                    color="blue"
                ></Input>
                <Input handleChange={handleChange}
                    value="green"
                    title="Green"
                    name="test3"
                    color="green"
                ></Input>
                <Input handleChange={handleChange}
                    value="white"
                    title="White"
                    name="test3"
                    color="white"
                ></Input>
        </div>
    );
};

export default Color;