import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" className="navbar-dark bg-dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
