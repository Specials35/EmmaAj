import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default AppNavbar;