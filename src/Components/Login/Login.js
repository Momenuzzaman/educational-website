import React from 'react';
import img from '../../image/cart.jpeg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';

const Login = () => {
    return (
        <div>
            <img src={img} alt="" />
            <div className="container form">
                <Form>
                    <h2>Login</h2>
                    <br />
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" className="btn-top login" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;