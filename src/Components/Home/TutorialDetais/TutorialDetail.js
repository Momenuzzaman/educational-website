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
                <h4>{description}</h4>
                <br />
                <Card style={{ width: '25rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>${price}</Card.Title>
                        <Card.Text>
                            {name}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Start : {start} </ListGroup.Item>
                        <ListGroup.Item>End : {end} </ListGroup.Item>
                        <ListGroup.Item>Duration : {duration}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body >
                        <button className="btn-top">Go to Home</button>
                        <button className="btn-top">Courses</button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default TutorialDetail; 