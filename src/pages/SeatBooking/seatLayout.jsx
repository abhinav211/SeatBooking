import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import SeatsImage from "/home/abhinav211/SeatBooking/src/assets/seats-svg-s4-final.svg?react";
import SeatDetailsNavbar from "/home/abhinav211/SeatBooking/src/components/seatDetailsNavbar/seatDetailsNavbar.jsx";
import "./seatLayout.css";

function SeatLayout() {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [clickedSeat, setClickedSeat] = useState({ id: "", name: "" });
  const [svgContent, setSvgContent] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state) {
      setSelectedFloor(location.state.floor);
      setSelectedModule(location.state.room);
      setSelectedDate(new Date(location.state.date).toDateString());
    }
  }, [location]);

  useEffect(() => {
    const seatsSvg = SeatsImage();
    setSvgContent(seatsSvg);
  }, []);

  const handleSeatClick = (e) => {
    const seatElement = e.target.closest("g[id]");
    if (seatElement) {
      const seatId = seatElement.id;

      if (seatId === clickedSeat.id) {
        setClickedSeat({ id: "", name: "" });
      } else {
        setClickedSeat({ id: seatId, name: seatElement.textContent.trim() });
      }
    }
  };

  const onBackClick = () => {
    navigate("/bookseat");
  };
  const renderSeats = () => {
    if (!svgContent) return null;
    const seatsChildren = React.Children.map(
      svgContent.props.children,
      (child) => {
        if (child.props.id === clickedSeat.id) {
          return React.cloneElement(child, {
            style: { fill: "#4CBB17" },
            children: React.Children.map(child.props.children, (seatChild) =>
              React.cloneElement(seatChild, { style: { fill: "#4CBB17" } })
            ),
          });
        }
        return child;
      }
    );
    return React.cloneElement(svgContent, {
      onClick: handleSeatClick,
      children: seatsChildren,
      style: { cursor: "pointer", width: "100%", height: "auto" },
    });
  };

  return (
    <div className="seat-selection-container d-flex flex-column vh-100">
      <SeatDetailsNavbar
        selectedFloor={selectedFloor}
        selectedModule={selectedModule}
        selectedDate={selectedDate}
        onBackClick={onBackClick}
      />
      <div style={{ overflow: "auto", flex: 1 }}>
        <div className="svg-container h-100 d-flex justify-content-center align-items-center">
          <div
            className="svg-content"
            style={{ width: "80%", maxHeight: "80%" }}
          >
            {renderSeats()}
          </div>
        </div>
      </div>
      {clickedSeat.id && (
        <Navbar bg="white" fixed="bottom" className="shadow-lg">
          <Container>
            <Row className="w-100">
              <Col className="d-flex justify-content-center">
                <Button
                  className="btn-danger rounded px-4 py-2"
                  style={{ width: "400px" }}
                >
                  Seat Details: {clickedSeat.id}
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      )}
    </div>
  );
}

export default SeatLayout;
