import { Link, NavLink } from "react-router";
import React  from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HomeNavBar () {
    return (
        <> 

            <hr/>
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand>
              <NavLink to='/home ' className="box">  Home </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to='/about ' className="box">  about us </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to='/contact  ' className="box">  Contact us </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to='/user/ravi/23' className="box">  user  </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to='/Serch' className="box">  Serch  </NavLink>
            </Navbar.Brand>
            <Navbar.Brand>
              <NavLink to='/Service' className="box">  Service  </NavLink>
            </Navbar.Brand>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            {/* <NavLink to="/"> Home </NavLink >
            <NavLink  to="/about"> About us </NavLink >
            <NavLink  to="/contact">Contact  us </NavLink > */}
        
        
        </>
    )
}