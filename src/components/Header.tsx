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


    // <div className="navbar-header d-none d-lg-block bg-dark d-flex justify-content-end">
    //   <Nav.Link className="bg-darkgrey px-4">LEASE A HOME</Nav.Link>
    //        <Nav.Link className="bg-darkgrey  px-4" >LEASE A WORKSPACE</Nav.Link>
    //      <Nav.Link className="bg-darkgrey  px-4">RENT A VENUE</Nav.Link>

    // </div>

    // // //     // <Row className="navbar-header d-none d-lg-block bg-dark">
    // // // //   <Col md={{ span: 3, offset: 9 }}> 
    // // // //     <Row className="bg-darkgrey left"  >
    // // // //       <Nav.Link >Mobile1</Nav.Link>
    // // // //       <Nav.Link >Mobile2</Nav.Link>
    // // // //       <Nav.Link >Mobile3</Nav.Link>
    // // // //     </Row>
    // // // //   </Col>
    // // // // </Row>


  );
}
// justify-content-end
//https://getbootstrap.com/docs/4.0/layout/grid/#horizontal-alignment

export default Header;
