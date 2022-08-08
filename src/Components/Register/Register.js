import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import img from '../../image/cart.jpeg';
import firebase from '../../firebase/firebase';



const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [validated, setValidated] = useState(false);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };
    const { createNewUser, Error } = firebase();


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        if (password !== confirmPassword) {
            setError("Password did not match");
            return;
        }
        if (password < 6) {
            setError("Password must be at least 6 characters");
            return;
        }
        createNewUser(email, password);
    };

    return (
        <div>
            <img src={img} className="img" alt="" />
            <div className="container form">
                <h2>Register</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit} >
                    <br />
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Confirm Password" required />
                        <p style={{ color: 'red' }}>{error}</p>
                        <p style={{ color: 'red' }}>{Error}</p>
                    </Form.Group>
                    <Button variant="primary" className="btn-top login" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default Register;