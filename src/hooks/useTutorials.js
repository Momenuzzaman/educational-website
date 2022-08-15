import { useState } from "react";
import fakeData from "../FakeData/Fakedata";

const useTutorials = () => {
    const [tutorials, setTutorials] = useState(fakeData);
    return [tutorials, setTutorials];
};
export default useTutorials;
