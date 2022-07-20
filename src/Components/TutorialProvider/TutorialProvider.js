import React, { createContext } from 'react';
export const TutorialContext = createContext();

const TutorialProvider = () => {

    return (
        <TutorialContext.Provider>

        </TutorialContext.Provider>
    );
};

export default TutorialProvider;