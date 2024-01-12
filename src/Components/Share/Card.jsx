import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
    return (
        <div>
          <div className='card'>
                <img className='card-img' src={img} alt="" />
                <div className='card-details'>
                    <h3 className='card-title'>{title}</h3>
                    <section className="card-reviews">
                        <AiFillStar className='ratings-start'/>
                        <AiFillStar className='ratings-start'/>
                        <AiFillStar className='ratings-start'/>
                        <AiFillStar className='ratings-start'/>
                        {/* {star} */}
                        <span className='total-reviews'>{reviews}</span>
                    </section>
                    <section className="card-price">
                        <div className="price">
                            <del>${prevPrice}</del> {newPrice}
                        </div>
                        <div className="bag">
                            <BsFillBagHeartFill className='bag-icons'/>

                        </div>
                    </section>
                </div>

            </div>

        </div>
    );
};

export default Card;