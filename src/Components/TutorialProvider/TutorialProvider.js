import React, { createContext } from 'react';
import useTutorial from '../../hooks/useTutorial';

export const TutorialContext = createContext();

const TutorialProvider = ({ children }) => {
    const AllContext = useTutorial();
    return (
        <TutorialContext.Provider value={AllContext}>
            {children}
        </TutorialContext.Provider>
    );
};

export default TutorialProvider;