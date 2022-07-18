import React from 'react';
import { useParams } from 'react-router-dom';

const TutorialDetail = ({ tutorial }) => {
    const { tutorialId } = useParams();
    console.log("tutorial", tutorial);
    return (
        <div>
            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 