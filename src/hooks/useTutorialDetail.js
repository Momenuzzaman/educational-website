import { useEffect, useState } from "react";


const useTutorialDetail = (id) => {
    const [tutorials, setTutorial] = useState([]);
    const tutorialsDetail = tutorials.find((item) => item.id === +id);
    useEffect(() => {
        fetch("http://localhost:3000/education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, [id]);
    return { tutorialsDetail };
};
export default useTutorialDetail;