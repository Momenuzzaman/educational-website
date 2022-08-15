import React from 'react';
import useCart from '../../hooks/useCart';
import useTutorials from '../../hooks/useTutorials';
import './Cart.css';


const Cart = () => {
    const [tutorials] = useTutorials();
    const [cart] = useCart(tutorials);
    console.log(cart);
    return (
        <div className="cart-container">
            <div>
                <h1>Review</h1>
            </div>
            <div>
                <h4>Item Order : </h4>
                <h4>Quantity :</h4>
                <h4>Price :</h4>
            </div>
        </div>
    );
};

export default Cart;