import React from 'react'
import MyLogo from '../logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




const Header = () => {
  return (
    <Navbar className='navbar' expand="lg">
    <Container>
      <Navbar.Brand href="#"><img className='header--image' src={MyLogo} alt="Logo" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll"  style={{border:'1px solid #fff', color:'#fff'}}/>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/"><span className='navbar--links'>Home</span></Nav.Link>
          <Nav.Link href="#" ><span className='navbar--links'>About</span></Nav.Link>
          <Nav.Link href="#" ><span className='navbar--links'>Contact</span></Nav.Link>
          
        </Nav>
       <div className='d-flex'>
       <Nav.Link href="#" className='fs-5 mx-3'><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></Nav.Link>
        <Nav.Link href="#" className='fs-5 mx-1'><FontAwesomeIcon icon={faCircleUser} style={{color: "#ffffff",}} /></Nav.Link>
        
       </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
