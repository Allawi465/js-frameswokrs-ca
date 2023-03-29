import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { CartContext } from '../../cart/context/index';
import { BsCart, BsX  } from 'react-icons/bs';
import { RiMenu5Line } from 'react-icons/ri';

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(!open);
  const { state } = useContext(CartContext);

  return (
    <Navbar collapseOnSelect expand="sm" variant="dark" className='navbar'>
      <Container className='containerNavbar navbarContainer'>
        <div style={{width: '130px'}}>
          <div className="navbar-logo">
            <Navbar.Brand as={NavLink} to={"/"}><span className="navbar-circle">B</span><span className='navbar-text'>BUYERS.</span></Navbar.Brand>
          </div>
        </div>
        <div className='d-flex'>
          <Nav.Link as={NavLink} to={"/cart"} className="d-flex navbar-cartMobile me-2 d-sm-none">
              <div className='navbar-cartDiv me-2 mt-1'>
                <BsCart size={"2rem"} style={{ marginLeft: '2px' }} />
                <span className='navbar-quantityCart'>{state.totalQuantity}</span>
              </div>
            </Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleOpen}>
            {open ? <BsX size={30} /> : <RiMenu5Line size={30} />}
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
            <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link>
            <Nav.Link as={NavLink} to={"/contact"}>Contact</Nav.Link>
            <Nav.Link as={NavLink} to={"/cart"} className="d-flex">Cart
              <div className='navbar-cartDiv d-none d-sm-block'>
                <BsCart size={"2rem"} style={{ marginLeft: '2px' }} />
                <span className='navbar-quantityCart'>{state.totalQuantity}</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;