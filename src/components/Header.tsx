import React from 'react';
import './Header.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';




function Header() {
  return (


    <Row className="navbar-header d-none d-lg-block bg-dark  " >
      <Col className="d-flex justify-content-end">
        <Row className="pr-b">
          <Nav.Link className="bg-darkgrey px-4">LEASE A HOME</Nav.Link>
          <Nav.Link className="bg-darkgrey  px-4" >LEASE A WORKSPACE</Nav.Link>
          <Nav.Link className="bg-darkgrey  px-4">RENT A VENUE</Nav.Link>
        </Row>
      </Col>


    </Row>


  );
}


export default Header;
