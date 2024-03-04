import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="border-bottom border-body">
            <Container fluid>
                <Navbar.Brand>Navbar</Navbar.Brand>

                <Nav className="collapse navbar-collapse">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success" type="submit">Search</Button>
                </Form>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;