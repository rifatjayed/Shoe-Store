import React from 'react';
import './Recommended.css'
import Button from '../Share/Button';

const Recommended = ({handleClick}) => {
    return (
        <div>
            <h1 className='recommeded-title'>Recommeded</h1>
            <div className='recommeded-flex'>
            <Button onclickHandler={handleClick} value="" title="All"></Button>    
 <Button onclickHandler={handleClick} value="Nike" title="Nike"></Button>
 <Button onclickHandler={handleClick} value="Adiddas" title="Adiddas"></Button>
 <Button onclickHandler={handleClick} value="Puma" title="Puma"></Button>
 <Button onclickHandler={handleClick} value="Vans" title="Vans"></Button>
 
            </div>
          
        </div>
    );
};

export default Recommended;