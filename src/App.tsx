import React from 'react';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'


function App() {
  return (
    <div className="App">

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      
        <Navbar.Brand className="navbar-title" href="#home" > THE PRESIDIO </Navbar.Brand>
        <div className="dropdown-divider d-lg-none" ></div>
        <Navbar.Collapse id="responsive-navbar-nav" className="">
          <div className="main-menu">
            <Nav className="mr-auto">
              <div className="mt-4 d-lg-none"></div>
              <NavDropdown title="Plan Your Visit" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="dropdown-divider"></div>
              <NavDropdown title="Things to Do" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="dropdown-divider"></div>
              <NavDropdown title="Events" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="dropdown-divider"></div>
              <NavDropdown title="Food" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="dropdown-divider"></div>
              <NavDropdown title="Lodging" id="collasible-nav-dropdown" >
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="">Another action</NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <div className="dropdown-divider d-lg-none"></div>
              <Nav.Link href="#transportation">Transportation</Nav.Link>

            </Nav>
            <div className="dropdown-divider d-lg-none"></div>
            <Nav className="nav-rows">

              <Nav.Link className="pr-s">中文</Nav.Link>
              <Nav.Link className="pr-s">  | </Nav.Link>
              <Nav.Link >Español</Nav.Link>
              <Nav.Link ><FaSearch /></Nav.Link>

            </Nav>
        </div>


          <Row className="navbar-header d-lg-none bg-darkgrey " >
            <Col className="d-flex justify-content-center">
              <Row className="footer-menu">
                <Nav.Link className="bg-darkgrey px-4">LEASE A HOME</Nav.Link>
                <Nav.Link className="bg-darkgrey  px-4" >LEASE A WORKSPACE</Nav.Link>
                <Nav.Link className="bg-darkgrey  px-4">RENT A VENUE</Nav.Link>
              </Row>
            </Col>

          </Row>

        </Navbar.Collapse>
      </Navbar>


    </div>
  );
}
//https://stackoverflow.com/questions/35351353/missing-visible-and-hidden-in-bootstrap-v4
//https://getbootstrap.com/docs/4.0/utilities/display/
//https://v4-alpha.getbootstrap.com/layout/responsive-utilities/

export default App;
