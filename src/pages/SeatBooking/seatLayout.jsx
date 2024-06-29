import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import SeatDetailsNavbar from "../../components/seatBookingNavbar/seatDetailsNavbar.jsx";
import SeatsSvg from "../../components/svgComponent/seatsSvg.jsx";
import SeatDetailsOffcanvas from "../../components/svgBottomFooter/SeatDetailsOffcanvas.jsx";
import "./seatLayout.css";

function SeatLayout() {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [clickedSeat, setClickedSeat] = useState({ id: "", name: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [showSeatDetails, setShowSeatDetails] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      setSelectedFloor(location.state.floor);
      setSelectedModule(location.state.room);
      setSelectedDate(new Date(location.state.date).toDateString());
    }
  }, [location]);

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
        selectedModule={selectedModule}
        selectedDate={selectedDate}
        onBackClick={onBackClick}
      />
      <Container fluid className="flex-grow-1 d-flex flex-column">
        <Row className="flex-grow-1 overflow-auto">
          <Col className="d-flex justify-content-center align-items-center">
            <div className="w-100" style={{ maxWidth: "1200px" }}>
              <SeatsSvg clickedSeat={clickedSeat} handleSeatClick={handleSeatClick} />
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
