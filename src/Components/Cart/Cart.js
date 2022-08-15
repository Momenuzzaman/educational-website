import React from 'react';
import useTutorials from '../hooks/useTutorials';
import './Cart.css';


const Cart = () => {
    const [tutorials] = useTutorials();
    console.log(tutorials);
    return (
        <div className="container">
            <h1>{tutorials.length}</h1>
            <h4>Item Order : </h4>
            <h4>Quantity :</h4>
            <h4>Price :</h4>
        </div>
    );
};

export default Cart;