import React, { useEffect, useState } from 'react';

const Tutorials = () => {
    const [tutorials, setTutorial] = useState([]);

    useEffect(() => {
        fetch("education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return (
        <div>
            <h1>This is a tutorials {tutorials.length}</h1>
        </div>
    );
};

export default Tutorials;