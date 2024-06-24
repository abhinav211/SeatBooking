import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../CSS/NavbarStyles.css";

function EnhancedNavbar() {
  return (
    <Navbar expand="lg" className="enhanced-navbar">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-hover">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/" className="nav-link-hover">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link-hover">
              About
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="navbarScrollingDropdown"
              className="nav-link-hover"
            >
              <NavDropdown.Item
                as={Link}
                to="/book-seat"
                className="dropdown-item-hover"
              >
                Book Seat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/view-booked-seat"
                className="dropdown-item-hover"
              >
                View Booked Seat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/cancel-booked-seat"
                className="dropdown-item-hover"
              >
                Cancel Booked Seat
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-link-hover">
              Contact
            </Nav.Link>
          </Nav>
          <Button variant="danger" className="logout-btn">
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EnhancedNavbar;
