import { Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/Fakedata';
import './TutorialDetail.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();

    const tutorial = fakeData.find(tutorial => tutorial.id === +tutorialId);

    const { name, description, price, title, end, duration, start, img } = tutorial;

    return (
        <div>
            <div className="detail ">
                <div className=" container">
                    <div className=" background ">
                        <h1>{name}</h1>
                        <br />
                        <p>{title}</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <p>{description}</p>
                <div>
                    <div>
                        <div>

                        </div>
                        <p> You Start on : <span>{start}</span> </p>
                        <p>Course will end : <span>{end}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorialDetail; 