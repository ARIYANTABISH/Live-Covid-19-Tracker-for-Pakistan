import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from "react-bootstrap/Card";
export const Topbar = () => {
  return (
    <div>

<Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand to="/">
          <Card.Img variant="top" src="./corona2.png" style={{width: "10%"}} />
             CoronoApp</Navbar.Brand>
          <Nav className="ms-auto">
          <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
