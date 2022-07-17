import React, { useEffect, useState } from 'react';
import Tutorial from '../Tutorial/Tutorial';
import './Tutorials.css';

const Tutorials = () => {
    const [tutorials, setTutorial] = useState([]);

    useEffect(() => {
        fetch("education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return (
        <div className=" container tutorials" >
            <div className="rated">
                <h1 >Top Rated Learning Tutorials {tutorials.length}</h1>
            </div>
            <div className="row">
                {
                    tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial}></Tutorial>)
                }
            </div>

        </div>
    );
};

export default Tutorials;