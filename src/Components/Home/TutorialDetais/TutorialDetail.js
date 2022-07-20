import { useParams } from 'react-router-dom';
import useTutorials from '../../../hooks/UseTutorials';

const TutorialDetail = () => {
    const { tutorialId } = useParams();

    const [tutorials] = useTutorials();

    const tutorial = tutorials.find(tutorial => tutorial.id === +tutorialId);
    console.log(tutorial);

    return (
        <div>
            {tutorial.name}
            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 