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
    const handleTutorialRemove = (tutorial) => {
        const rest = cart.filter(tuto => tuto.id !== tutorial.id);
        setCart(rest);
        removeFromDb(tutorial.id);
    };
    return (
        <div className="cart-container">
            <div className='cart-detail'>
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
                <h4>Item Order : {cart.length} </h4>
                <h4>Quantity :</h4>
                <h4>Price :</h4>
                <Link to='/inventory'><button>Proceed Checkout</button></Link>
            </div>
        </div>
    );
};

export default Cart;