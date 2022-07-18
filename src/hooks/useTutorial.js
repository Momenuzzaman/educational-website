
import { useEffect, useState } from "react";


const useTutorial = () => {
    const [tutorials, setTutorial] = useState([]);
    useEffect(() => {
        fetch("education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return [tutorials];
};
export default useTutorial;