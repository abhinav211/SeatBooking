import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap";
import "./NavbarStyles.css";

function NavbarHeader() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleNavItemClick = () => {
    setExpanded(false);
  };

  const handleDropdownToggle = (isOpen) => {
    // Do nothing when toggling the dropdown
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      bg="light"
      fixed="top"
      className="enhanced-navbar"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="brand-hover">
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" onClick={handleToggle} />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={Link}
              to="/"
              className="nav-link-hover"
              onClick={handleNavItemClick}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="nav-link-hover"
              onClick={handleNavItemClick}
            >
              About
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="navbarScrollingDropdown"
              className="nav-link-hover"
              onClick={(e) => e.stopPropagation()}
              onToggle={handleDropdownToggle}
            >
              <NavDropdown.Item
                as={Link}
                to="/bookseat"
                onClick={handleNavItemClick}
              >
                Book Seat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/view-booked-seat"
                onClick={handleNavItemClick}
              >
                View Booked Seat
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/cancel-booked-seat"
                onClick={handleNavItemClick}
              >
                Cancel Booked Seat
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={Link}
              to="/contact"
              className="nav-link-hover"
              onClick={handleNavItemClick}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Button
            variant="danger"
            className="logout-btn"
            onClick={handleNavItemClick}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
