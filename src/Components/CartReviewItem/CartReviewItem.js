import React from 'react';

const CartReviewItem = ({ tutorial }) => {
    const { name, price, quantity } = tutorial;
    return (
        <div>
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <p>Quantity : {quantity}</p>

        </div>
    );
};

export default CartReviewItem;