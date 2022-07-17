import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../image/main.png';
import './UperPart.css';


const UperPart = () => {
    return (
        <Container className="container">
            <Row className="d-flex align-items-center">
                <Col>
                    <h1>A learning platform that helps you to learning faster</h1>
                    <p>World-class training and development programs developed by top teachers</p>
                    <button className="btn-top">Expore All Course</button>
                </Col>
                <Col>
                    <img src={img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default UperPart;