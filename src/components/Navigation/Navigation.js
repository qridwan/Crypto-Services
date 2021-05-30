import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Brand from "../../img/brand.png";

const Navigation = () => {
  return (
    <Navbar bg="" expand="lg">
      <Navbar.Brand href="#home" >
        <img src={Brand} alt=""  />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto pr-3">
          <Nav.Link className="mr-5 button text-light" href="#doc">
            Documentation
          </Nav.Link >
          <Nav.Link href="#api" className="mr-5 button text-light">API</Nav.Link>
        </Nav>
        <Form inline>
          <Button variant="outline-dark" className="mr-5 text-light" >Register</Button>
          <Button variant="outline-dark" className="mr-5 text-light">Sign In</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
