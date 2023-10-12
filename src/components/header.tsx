import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuth } from './AuthContext';

function Header() {
    const { isLoggedIn, logout } = useAuth();
    return (
        <Navbar sticky='top' bg="dark" data-bs-theme="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                <img
                src='https://www.freepnglogos.com/uploads/apex-legends-logo-png/apex-legends-transparent-picture-20.png'
                alt='logo'
                width="30"
                height="30"
                className="d-inline-block align-top"
                />Apex Tournaments</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/tournaments">Tournaments</Nav.Link>
                        {isLoggedIn ? (
                        <Nav.Link href="/tournament/create">Create</Nav.Link>
                    ) : (
                        <></>
                    )}
                    {isLoggedIn ? (
                        <Nav.Link href="/mytournaments">My tournaments</Nav.Link>
                    ) : (
                        <></>
                    )}
                    </Nav>
                    {isLoggedIn ? (
                        <Button onClick={logout}>Logout</Button>
                    ) : (
                        <Button href='/login'>Login</Button>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
