import React from 'react';
import useCart from '../../hooks/useCart';
import useTutorials from '../../hooks/useTutorials';
import CartReviewItem from '../CartReviewItem/CartReviewItem';
import { removeFromDb } from '../utilities/fakedb';
import { Link } from 'react-router-dom';
import './Cart.css';


const Cart = () => {
    const [tutorials] = useTutorials();
    const [cart, setCart] = useCart(tutorials);
    console.log(cart);
    const handleTutorialRemove = (tutorial) => {
        const rest = cart.filter(tuto => tuto.id !== tutorial.id);
        setCart(rest);
        removeFromDb(tutorial.id);
    };
    let total = 0;
    let quantity = 0;
    for (const tutorial of cart) {
        quantity = quantity + tutorial.quantity;
        total = total + tutorial.price * quantity;
    }

    return (
        <div className="cart-container">
            <div className='cart-detail'>
                <h1 className="h1">
                    Order review :
                </h1>
                {
                    cart.map(tutorial => <CartReviewItem
                        key={tutorial.id}
                        tutorial={tutorial}
                        handleTutorialRemove={handleTutorialRemove}
                    >
                    </CartReviewItem>)
                }
            </div>
            <div className="cart-cal">
                <div className="cart">
                    <h4>Item Order : {cart.length} </h4>
                    <br />
                    <p>Total Quantity : {quantity}</p>
                    <br />
                    <p>Total Price : ${total}</p>
                    <br />
                    <Link to='/inventory'><button className='cart-button'>Proceed Checkout</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;