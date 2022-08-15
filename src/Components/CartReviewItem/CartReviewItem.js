import React from 'react';

const CartReviewItem = ({ tutorial }) => {
    const { img, name, price, quantity } = tutorial;
    return (
        <div>
            <div>
                <img src={img} alt=''></img>
            </div>
            <div></div>
        </div>
    );
};

export default CartReviewItem;