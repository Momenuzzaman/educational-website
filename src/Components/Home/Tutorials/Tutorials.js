import React, { useEffect, useState } from 'react';
import Tutorial from '../Tutorial/Tutorial';

const Tutorials = () => {
    const [tutorials, setTutorial] = useState([]);

    useEffect(() => {
        fetch("education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return (
        <div className="mt-5 container" >
            <h1 >Top Rated Learning Tutorials {tutorials.length}</h1>
            <div className="row">
                {
                    tutorials.map(tutorial => <Tutorial key={tutorial.id} tutorial={tutorial}></Tutorial>)
                }
            </div>

        </div>
    );
};

export default Tutorials;