import React from 'react';
import useCart from '../../hooks/useCart';
import useTutorials from '../../hooks/useTutorials';

import './Cart.css';


const Cart = () => {
    const [tutorials] = useTutorials();
    const [cart] = useCart(tutorials);
    console.log(cart);
    return (
        <div className="container">
            <h1>{tutorials.length}</h1>
            <h3>Cart: {cart.length}</h3>
            <h4>Item Order : </h4>
            <h4>Quantity :</h4>
            <h4>Price :</h4>
        </div>
    );
};

export default Cart;