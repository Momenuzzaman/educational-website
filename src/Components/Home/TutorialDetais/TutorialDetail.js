import { useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/Fakedata';
import './TutorialDetail.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();

    const tutorial = fakeData.find(tutorial => tutorial.id === +tutorialId);

    const { name, description, price, title, end, duration, start } = tutorial;

    return (
        <div className="detail">
            <div className=" container ">
                <h1>{name}</h1>
                <br />
                <p>{title}</p>
            </div>
        </div>
    );
};

export default TutorialDetail; 