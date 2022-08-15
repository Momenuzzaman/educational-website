import React from 'react';
import './CartReviewItem.css';

const CartReviewItem = ({ tutorial }) => {
    const { img, name, price, quantity } = tutorial;
    return (
        <div className="cart-review-item">
            <div>
                <img src={img} width="150px" alt=''></img>
            </div>
            <div className="cart-review-item-content">
                <div>
                    <p>{name}</p>
                    <p>Price : ${price}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <div>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};
export default CartReviewItem;