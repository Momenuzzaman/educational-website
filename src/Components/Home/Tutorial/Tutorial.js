import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Tutorial.css';

const Tutorial = (props) => {
    const { id, name, img, price } = props.tutorial;
    const navigate = useNavigate();
    const handleDetail = () => {
        navigate(`/tutorialDetail/${id}`);
    };

    return (
        <div className=" g-5 col-sm-12 col-md-6 col-lg-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <div className="d-flex justify-content-around py-4 ">
                        <button className="cart-button" onClick={() => handleDetail(id)}>Course Details</button>
                        <Card.Text className="price">
                            Price : ${price}
                        </Card.Text>
                    </div>
                    <Card.Title>{name}</Card.Title>
                    <button className="cart-button add-cart" onClick={() => props.handleAddToCart(props.tutorial)}>Add To Cart</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Tutorial;