import React from 'react';
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
import fakeData from '../../../FakeData/Fakedata';
import { createContext, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';

export const CartContext = createContext();

const Tutorials = () => {
    const [tutorials, setTutorials] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tutorial) => {
        const newCart = [...cart, tutorial];
        setCart(newCart);
        addToDb(tutorial.id);
        console.log(newCart);
    };

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