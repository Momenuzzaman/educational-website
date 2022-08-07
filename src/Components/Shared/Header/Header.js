import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import logo from '../../../image/nav.png';
import Form from 'react-bootstrap/Form';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Firebase from '../../../firebase/firebase';


const Header = () => {
    const { user, logOut } = Firebase();
    return (
        <div>
            <>
                <Navbar bg="light" variant="dark" className="nav" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">
                            <img src={logo} height="34" alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle className="nav-toggle" />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link className="nav-font" as={HashLink} to="/#home">Home</Nav.Link>
                            <Nav.Link className="nav-font" as={HashLink} to="/#courses">Courses</Nav.Link>
                            <Nav.Link className="nav-font" as={HashLink} to="/#topics">Topics</Nav.Link>
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                            <Link className="nav-font link" to="/cart" ><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Link>
                            <Link className="nav-font link" to="/Register">Register</Link>
                            <Link className="nav-font link" to="/login">Login</Link>
                            {user && <button>LogOut</button>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div >
    );
};

export default Header;