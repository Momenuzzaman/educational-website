import { useParams } from 'react-router-dom';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    return (
        <div>

            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 