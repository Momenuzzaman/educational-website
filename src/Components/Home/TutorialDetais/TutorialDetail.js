import { useParams } from 'react-router-dom';
import useTutorialDetail from '../../../hooks/useTutorialDetail';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    const { tutorialsDetails } = useTutorialDetail(tutorialId);

    console.log(tutorialsDetails);
    return (
        <div>

            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 