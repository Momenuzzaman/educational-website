import { useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/Fakedata';
import './TutorialDetail.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();


    const tutorial = fakeData.find(tutorial => tutorial.id === +tutorialId);
    console.log(tutorial);

    return (
        <div>
            {tutorial.name}
            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 