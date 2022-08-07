import React, { useState } from 'react';
import img from '../../image/cart.jpeg';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Login.css';
import firebase from '../../firebase/firebase';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };
    const { loggingWithGoogle, logInWithEmail } = firebase();


    const [validated, setValidated] = useState(false);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        setValidated(true);
        if (password < 6) {
            setError("Enter Correct Password");
            return;
        }
        logInWithEmail(email, password);
    };
    return (
        <div>
            <img src={img} className="img" alt="" />
            <div className="container form">
                <Form noValidate validated={validated} onSubmit={handleLogin}>
                    <h2>Login</h2>
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
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <p style={{ color: 'red' }}>{error}</p>
                    <Button variant="primary" className="btn-top login" type="submit">
                        Submit
                    </Button>
                </Form>
                <br />
                <button className="btn-Google" onClick={loggingWithGoogle}>Login with Google</button>
                {/* <button onClick={loginWithFacebook}>Login with Facebook</button> */}
            </div>
        </div>
    );
};

export default Login;