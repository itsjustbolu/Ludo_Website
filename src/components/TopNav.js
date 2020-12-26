import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./TopNav.css";
import BlackLogo from "../images/logo/ludo_logo_alone.png";

function TopNav() {
  return (
    <div>
      <Navbar expand="lg" className="nav_container">
        <Navbar.Brand href="/">
          <img
            src={BlackLogo}
            width="117"
            height="40"
            alt="ludo property management logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/listings">Listings</Nav.Link>
            <Nav.Link href="/apply">Apply</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TopNav;
