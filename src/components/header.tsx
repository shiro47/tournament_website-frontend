import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


function Header() {
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
                        <Nav.Link href="/tournament/create">Create</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button href='/login'>Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
