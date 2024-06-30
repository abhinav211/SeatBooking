import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SeatDetailsNavbar from "../../components/seatBookingNavbar/seatDetailsNavbar.jsx";
import SeatsSvg from "../../components/svgComponent/seatsSvg.jsx";
import SeatDetailsOffcanvas from "../../components/svgBottomFooter/SeatDetailsOffcanvas.jsx";
import "./seatLayout.css";

function SeatLayout() {
  const [clickedSeat, setClickedSeat] = useState({ id: "", name: "" });
  const [showSeatDetails, setShowSeatDetails] = useState(false);

  const { selectedFloor, selectedRoom, selectedDate } = useSelector(
    (state) => state.booking
  );

  console.log(useSelector(
    (state) => state.booking
  ))
  const navigate = useNavigate();

  const handleSeatClick = (e) => {
    const seatElement = e.target.closest("g[id]");
    if (seatElement) {
      const seatId = seatElement.id;

      if (seatId === clickedSeat.id) {
        setClickedSeat({ id: "", name: "" });
        setShowSeatDetails(false);
      } else {
        setClickedSeat({ id: seatId, name: seatElement.textContent.trim() });
        setShowSeatDetails(true);
      }
    }
  };

  const onBackClick = () => {
    navigate("/bookseat");
  };

  return (
    <div className="d-flex flex-column vh-100">
      <SeatDetailsNavbar
        selectedFloor={selectedFloor}
        selectedModule={selectedRoom}
        selectedDate={selectedDate ? new Date(selectedDate) : "Not selected"} // Ensure date is a Date object
        onBackClick={onBackClick}
      />
      <Container fluid className="flex-grow-1 d-flex flex-column">
        <Row className="flex-grow-1 overflow-auto">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="w-100" style={{ maxWidth: "1200px" }}>
              <SeatsSvg
                clickedSeat={clickedSeat}
                handleSeatClick={handleSeatClick}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <SeatDetailsOffcanvas
        show={showSeatDetails}
        onHide={() => setShowSeatDetails(false)}
        seatId={clickedSeat.id}
      />
    </div>
  );
}

export default SeatLayout;
