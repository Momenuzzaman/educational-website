import React from 'react';
import useCart from '../../hooks/useCart';
import useTutorials from '../../hooks/useTutorials';
import CartReviewItem from '../CartReviewItem/CartReviewItem';
import './Cart.css';


const Cart = () => {
    const [tutorials] = useTutorials();
    const [cart, setCart] = useCart(tutorials);
    const handleTutorialRemove = (tutorial) => {
        const rest = cart.filter(tuto => tuto.id !== tutorial.id);
        setCart(rest);
    };
    return (
        <div className="cart-container">
            <div>
                {
                    cart.map(tutorial => <CartReviewItem
                        tutorial={tutorial}
                        handleTutorialRemove={handleTutorialRemove}
                    >
                    </CartReviewItem>)
                }
            </div>
            <div>
                <h4>Item Order : {cart.length} </h4>
                <h4>Quantity :</h4>
                <h4>Price :</h4>
            </div>
        </div>
    );
};

export default Cart;