import React from 'react';

const CartReviewItem = ({ tutorial }) => {
    const { img, name, price, quantity } = tutorial;
    return (
        <div>
            <div>
                <img src={img} alt=''></img>
            </div>
            <div>
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