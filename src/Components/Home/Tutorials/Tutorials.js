
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
import fakeData from '../../../FakeData/Fakedata';
import { useState } from 'react';

const Tutorials = () => {
    const [tutorials, setProducts] = useState(fakeData);
    console.log(tutorials);
    const handleAddToCart = (product) => {
        console.log(product);
    }

    return (
        <div className=" container tutorials" id="courses" >
            <div className="rated">
            </div>
            <div className="row">
                {
                    tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial} handleAddToCart={handleAddToCart}></Tutorial>)
                }
            </div>
        </div>
    );
};

export default Tutorials;