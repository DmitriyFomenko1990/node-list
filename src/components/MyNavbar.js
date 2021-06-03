import React from 'react';
import {Container} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

export const MyNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mb-3">
            <Container>
                <Navbar.Brand>TOdoLIST</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink className="nav-link" to='/' exact>Home</NavLink>
                    <NavLink className="nav-link"  to='/about' >About</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};