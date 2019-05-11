import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import React from "react";

function MyNavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">IndiePlay</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/about">Home</Nav.Link>
                <Nav.Link href="/search">Search</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MyNavBar;
