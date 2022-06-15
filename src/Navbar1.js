/** @format */

import React from "react";
import fylologo from "./images/logo.svg";
import "./AllCSS.css";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navbar1 = () => {
  return (
    <div className="navbar1">
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={fylologo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle bg="ligh" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navitems">
              <Nav.Link>
                <a href="#">Features</a>
              </Nav.Link>
              <Nav.Link>
                <a href="#">Team</a>
              </Nav.Link>
              <Nav.Link>
                <a href="#">Sign In</a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
