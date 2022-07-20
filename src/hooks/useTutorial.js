
import { useEffect, useState } from "react";


const useTutorial = () => {
    const [tutorials, setTutorial] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return [tutorials];
};
export default useTutorial;