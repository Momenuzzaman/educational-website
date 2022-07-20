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
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default TutorialDetail; 