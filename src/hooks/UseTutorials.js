import { useContext } from "react";
import { TutorialContext } from "../Components/TutorialProvider/TutorialProvider"

const useTutorials = () => {
    return useContext(TutorialContext);
};

export default useTutorials;