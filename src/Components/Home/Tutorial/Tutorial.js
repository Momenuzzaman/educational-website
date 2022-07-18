import React from 'react';
import { Card } from 'react-bootstrap';
import './Tutorial.css';

const Tutorial = ({ tutorial }) => {
    const { title, name, img, price } = tutorial;
    return (
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4" >
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex justify-content-around py-4 ">
                        <button className="cart-button" >Course Details</button>
                        <Card.Text className="price">
                            Price : ${price}
                        </Card.Text>
                    </div>
                    <Card.Title>{name}</Card.Title>

                </Card.Body>
            </Card>
        </div>

    );
};

export default Tutorial;