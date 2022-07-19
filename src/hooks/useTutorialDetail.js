import { useEffect, useState } from "react";


const useTutorialDetail = (id) => {
    const [tutorial, setTutorial] = useState([]);
    const tutorialsDetails = tutorial.find((item) => item.id === +id);
    useEffect(() => {
        fetch("http://localhost:3000/education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
    return { tutorialsDetails };
};
export default useTutorialDetail;