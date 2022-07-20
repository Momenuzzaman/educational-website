import { useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/Fakedata';
import './TutorialDetail.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();

    const tutorial = fakeData.find(tutorial => tutorial.id === +tutorialId);

    const { name, description, price, title, end, duration, start } = tutorial;

    return (
        <div className="detail">
            <h1></h1>
            <h1>This is a tutorial {tutorialId}</h1>
        </div>
    );
};

export default TutorialDetail; 