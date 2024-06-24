import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col,} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "../CSS/Seatselection.css";
import { ReactComponent as SeatsImage } from "../assets/seats-svg-s4-final.svg"; // Ensure the correct import path

function BookingPage() {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setSelectedFloor(location.state.floor);
      setSelectedModule(location.state.module);
    }
  }, [location]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSeatClick = () => {
    handleShow();
  };

  return (
    <Container fluid className="seat-selection-container">
      <Row className="mt-auto mb-3 selected-info">
        <Col className="text-center">
          <h4>
            Selected Floor: {selectedFloor} | Selected Module: {selectedModule}
          </h4>
        </Col>
      </Row>
      <Row>
        <Col lg={10} className="svg-container">
          <SeatsImage onClick={handleSeatClick} className="seats-image" />
        </Col>
      </Row>
    </Container>
  );
}

export default BookingPage;
