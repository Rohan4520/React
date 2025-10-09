import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router";
import Badge from '@mui/material/Badge';
// import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import '../Components/HomeNavBar.css'



function HomeNavBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
           <div >
            <Navbar expand="lg" className="bg-body-tertiary ">
            
                <Container fluid className="NavBar">
      <NavLink to='/'>
        <Navbar.Brand>Shopping Cart</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 cart1"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <NavLink to='/'>
            <Navbar.Brand className="cart1"> Cart Home</Navbar.Brand>
            </NavLink>
            <NavLink to='/cartdetails'>
            <Navbar.Brand > Cart Details</Navbar.Brand>
            </NavLink>
        
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
           
            <Badge badgeContent={0}  color="primary"
            
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
            <i class="fa-solid fa-cart-shopping nav_cart_img" ></i>
             </Badge>
           
          </Form>
        </Navbar.Collapse>
      </Container>
               
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div className="cart_details_menu" style={{width:"22rem" , padding:'5px'}}>
                        <div className="cart_details_menu">
                            <i className="fas fa-close smallclose cross img" onClick={handleClose}></i>
                            <p className='nav_para_cart'> Your Cart Empty </p>
                            <img src="./cart-gif" alt="emptyCartImage" className="empty_cart_Img" />
                        </div>
                    </div>
                    
                </Menu>
                
            </Navbar>
            </div>
        </>
    )
}
export default HomeNavBar