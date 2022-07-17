import React from 'react';
import { Card } from 'react-bootstrap';
import './Tutorial.css';

const Tutorial = ({ tutorial }) => {
    const { title, name, img, price } = tutorial;
    return (
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price : ${price}
                    </Card.Text>
                    <button className="cart-button" >Course Details</button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Tutorial;