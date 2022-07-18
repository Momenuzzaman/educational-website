import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../../../image/main.png';
import './UperPart.css';


const UperPart = () => {
    const navigate = useNavigate();
    const handleAllCourse = () => {
        navigate("/course");

    };
    return (
        <div className="body">
            <Container >
                <Row className="d-flex align-items-center">
                    <Col>
                        <h1>A learning platform that helps you to learning faster</h1>
                        <p>World-class training and development programs developed by top teachers</p>
                        <button onClick={handleAllCourse} className="btn-top">Expore All Course</button>
                    </Col>
                    <Col>
                        <img src={img} height="80%" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UperPart;