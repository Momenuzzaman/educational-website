import { useSelect } from "@mui/base";
import { useEffect } from "react";


const useTutorial = () => {
    const [tutorials, setTutorial] = useSelect([]);
    useEffect(() => {
        fetch("education.json")
            .then(res => res.json())
            .then(data => setTutorial(data));
    }, []);
};