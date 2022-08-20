import React, { useEffect } from 'react';
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
// import fakeData from '../../../FakeData/Fakedata';
import { createContext, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useTutorials from '../../../hooks/useTutorials';


export const CartContext = createContext();

const Tutorials = () => {
    const [tutorials] = useTutorials();
    // const [tutorials, setTutorials] = useState(fakeData);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedTutorial = tutorials.find(tutorial => tutorial.id == id);
            if (addedTutorial) {
                const quantity = storedCart[id];
                addedTutorial.quantity = quantity;
                saveCart.push(addedTutorial);
            }
        }
        setCart(saveCart);
    }, [tutorials]);

    const handleAddToCart = (tutorial) => {
        const newCart = [...cart, tutorial];
        console.log(cart);
        setCart(newCart);
        addToDb(tutorial.id);
    };
    return (
        <div className=" container tutorials" id="courses" >
            <div className="rated">
            </div>
            <div className="row">
                {
                    tutorials.map(tutorial => <Tutorial key={tutorial.id}
                        tutorial={tutorial}
                        cart={cart}
                        setCart={setCart}
                        handleAddToCart={handleAddToCart}
                    ></Tutorial>)
                }
            </div>
        </div>
    );
};

export default Tutorials;