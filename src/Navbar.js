import React from 'react';
import { Navbar, Nav, InputGroup, FormControl } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">About</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
            </Nav>

            // Make a search bar on the right.
            <InputGroup>
                <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </Navbar>
    );
}

export default AppNavbar;