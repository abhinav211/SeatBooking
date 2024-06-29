import React from "react";
import { Offcanvas, Container, Row, Col, Button } from "react-bootstrap";

const SeatDetailsOffcanvas = ({ show, onHide, seatId }) => {
  return (
    <Offcanvas show={show} onHide={onHide} placement="bottom" style={{ height: "auto", maxHeight: "30vh" }}>
      <Offcanvas.Header closeButton className="pb-2">
        <Offcanvas.Title as="h5">Seat Details</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="pt-0">
        <Container fluid className="px-0">
          <Row className="justify-content-center">
            <Col xs={12}>
              <div className="d-flex flex-column align-items-center">
                <p className="mb-2 text-center"></p>
                <Button className="btn-danger rounded px-4 py-2" style={{ maxWidth: "200px" }}>
                  Book Seat {seatId}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SeatDetailsOffcanvas;
