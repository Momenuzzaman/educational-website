
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';
import fakeData from '../../../FakeData/Fakedata';
import { useState } from 'react';

const Tutorials = () => {
    const [products, setProducts] = useState(fakeData);
    console.log(products);
    return (
        <div className=" container tutorials" id="courses" >
            <div className="rated">

            </div>
            <div className="row">
                {
                    products.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial}></Tutorial>)
                }
            </div>
        </div>
    );
};

export default Tutorials;