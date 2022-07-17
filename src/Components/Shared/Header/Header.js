import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../image/nav.png';
import Form from 'react-bootstrap/Form';
import './Header.css';


const Header = () => {

    return (
        <div>
            <>
                <Navbar bg="light" variant="dark" sticky="top" className="nav" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} height="34" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="nav-font" href="#home">Home</Nav.Link>
                            <Nav.Link className="nav-font" href="#courses">Courses</Nav.Link>
                            <Nav.Link className="nav-font" href="#blog">Blog</Nav.Link>
                            <Nav.Link className="nav-font" href="#Page">Page</Nav.Link>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;