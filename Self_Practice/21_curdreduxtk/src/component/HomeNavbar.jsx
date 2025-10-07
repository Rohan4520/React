import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';


function HomeNavbar() {
  return (
    <>
   
    <Navbar expand="lg" className="bg-body-tertiary" >
      <Container fluid>
        <NavLink to='/'  style={{textDecoration : 'none'}}>
        <Navbar.Brand > REACT CURD </Navbar.Brand>
        </NavLink>
       
        <Navbar.Collapse id="navbarScroll">
          <Nav  className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll  >

              <NavLink to="/" style={{textDecoration : 'none'}}>
            <Navbar.Brand   >Home</Navbar.Brand>
            </NavLink>

            <NavLink  to="/Create" style={{textDecoration : 'none'}} >
            <Navbar.Brand >Create</Navbar.Brand>
            </NavLink>
            
          </Nav>
          <Form className="d-flex w-50" >
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
    
    </>
  );
}

export default HomeNavbar;