import React, { useEffect } from 'react';
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
import fakeData from '../../../FakeData/Fakedata';
import { createContext, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useTutorials from '../../hooks/useTutorials';

export const CartContext = createContext();

const Tutorials = () => {
    const [tutorials] = useTutorials();
    // const [tutorials, setTutorials] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tutorial) => {
        const newCart = [...cart, tutorial];
        setCart(newCart);
        addToDb(tutorial.id);
        console.log(newCart);
    };
    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addToTutorial = tutorials.find(tutorial => tutorial.id === id);
            if (addToTutorial) {
                const quantity = storedCart[id];
                addToTutorial.quantity = quantity;
                saveCart.push(addToTutorial);
            }
        }
    }, [tutorials]);

    return (
        <div className=" container tutorials" id="courses" >
            <div className="rated">
            </div>
            <div className="row">
                {
                    tutorials.map(tutorial => <Tutorial key={tutorial.id}
                        tutorial={tutorial}
                        handleAddToCart={handleAddToCart}
                    ></Tutorial>)
                }
            </div>
        </div>
    );
};

export default Tutorials;