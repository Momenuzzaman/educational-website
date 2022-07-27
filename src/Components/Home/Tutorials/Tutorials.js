
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
import fakeData from '../../../FakeData/Fakedata';
import { createContext, useState } from 'react';

export const CartContext = createContext();

const Tutorials = () => {
    const [tutorials, setProducts] = useState(fakeData);
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tutorial) => {
        const newCart = [...cart, tutorial];
        setCart(newCart);
        console.log(cart);
    };
    return (
        <CartContext.Provider values={cart}>
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
        </CartContext.Provider>
    
};

export default Tutorials;