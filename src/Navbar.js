import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="border-bottom border-body">
            <Container fluid>

                <Navbar.Brand>Navbar</Navbar.Brand>
                <Form className="d-flex" role="search">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>

                {/* Additional Nav links if needed */}
                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;