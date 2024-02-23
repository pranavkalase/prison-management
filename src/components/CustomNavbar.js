import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import "./PrisonForm.css";

const CustomNavbar = () => {
  const navi = useNavigate();
  return (
    <Navbar className="bg-body-tertiarys">
    <Container>
      <Navbar.Brand className='navbutton' onClick={()=> navi("/")}>Prison Management</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text >
        <div className="navbutton" onClick={() => navi("/List")}>List</div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default CustomNavbar