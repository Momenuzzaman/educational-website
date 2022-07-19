import { useParams } from 'react-router-dom';
import useTutorialDetail from '../../../hooks/useTutorialDetail';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    const { tutorialsDetail } = useTutorialDetail(tutorialId);
    console.log(tutorialsDetail);

    return (
        <div>
            {/* <h1>{tutorialsDetail.title}</h1> */}
            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 