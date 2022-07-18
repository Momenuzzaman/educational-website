import { useParams } from 'react-router-dom';
import useTutorial from '../../../hooks/useTutorial';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    const [tutorials] = useTutorial();
    console.log(tutorials);
    return (
        <div>

            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 