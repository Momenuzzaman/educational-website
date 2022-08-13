import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import fakeData from '../../../FakeData/Fakedata';
import './TutorialDetail.css';

const TutorialDetail = () => {
    const { tutorialId } = useParams();
    const tutorial = fakeData.find(tutorial => tutorial.id === +tutorialId);
    const { name, description, price, title, end, duration, start, img } = tutorial;

    const navigate = useNavigate();
    const handleBackHome = () => {
        navigate("/");
    };
    return (
        <div>
            <div className="detail g-5 col-sm-12 col-md-6 col-lg-4" >
                <div className=" container">
                    <div className=" background  ">
                        <h1>{name}</h1>
                        <br />
                        <p>{title}</p>
                        <br />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="container last">
                <Card style={{ width: '25rem' }} >
                    <Card.Img variant="top" width="100%" src={img} />
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
                </Card>
                <br></br>
                <button className="btn-top" onClick={handleBackHome}>Go Home</button>
            </div>
        </div>
    );
};

export default TutorialDetail; 