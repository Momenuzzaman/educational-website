import React from 'react';
import Topics from '../Topics/Topics';
import Tutorials from '../Tutorials/Tutorials';
import UperPart from '../UperPart/UperPart';

const Home = () => {
    return (
        <div>
            <UperPart />
            <Tutorials />
            <Topics />
        </div>
    );
};

export default Home;