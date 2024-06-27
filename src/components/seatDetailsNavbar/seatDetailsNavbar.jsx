import React from "react";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import {
  BackArrowIcon,
  ChairIcon,
} from "/home/abhinav211/SeatBooking/src/assets/IconSvg.jsx";

const SeatDetailsNavbar = ({
  selectedFloor,
  selectedModule,
  selectedDate,
  onBackClick,
}) => {
  return (
    <Navbar
      bg="danger"
      variant="light"
      className="py-2 shadow-sm"
      style={{
        marginTop: 0,
        marginBottom: 0,
        borderBottom: "1px solid #e0e0e0",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container fluid className="px-3">
        <Row className="w-100 align-items-center">
          <Col xs="auto" className="pe-0">
            <Navbar.Brand className="d-flex align-items-center">
              <BackArrowIcon onClick={onBackClick} className="me-3" />
              <ChairIcon className="me-2" />
              <span className="fw-bold">Seat Booking</span>
            </Navbar.Brand>
          </Col>
          <Col>
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="me-3">
                <strong>Floor:</strong> {selectedFloor || "Not selected"}
              </Navbar.Text>
              <Navbar.Text className="me-3">
                <strong>Module:</strong> {selectedModule || "Not selected"}
              </Navbar.Text>
              <Navbar.Text>
                <strong>Date:</strong> {selectedDate || "Not selected"}
              </Navbar.Text>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default SeatDetailsNavbar;
