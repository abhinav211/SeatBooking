import React, { useState } from "react";
import {
  Dropdown,
  DropdownButton,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const floors = {
  8: ["Module S1", "Module S2", "Module S3", "Module S4"],
};

const SeatBookingDropdown = () => {
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const handleFloorSelect = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null);
  };

  const handleRoomSelect = (module) => {
    setSelectedRoom(module);
  };

  const handleBooking = () => {
    navigate("/seat", {
      state: { floor: selectedFloor, module: selectedRoom },
    });
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={8} md={6} lg={4} className="text-center">
          <DropdownButton
            id="floor-dropdown"
            title={selectedFloor ? `Floor ${selectedFloor}` : "Select Floor"}
            className="mb-3 w-100"
          >
            {Object.keys(floors).map((floor) => (
              <Dropdown.Item
                key={floor}
                onClick={() => handleFloorSelect(floor)}
              >
                Floor {floor}
              </Dropdown.Item>
            ))}
          </DropdownButton>

          {selectedFloor && (
            <DropdownButton
              id="room-dropdown"
              title={selectedRoom || "Select Room"}
              className="mb-3 w-100"
            >
              {floors[selectedFloor].map((module) => (
                <Dropdown.Item
                  key={module}
                  onClick={() => handleRoomSelect(module)}
                >
                  {module}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          )}

          {selectedRoom && (
            <div className="mt-3">
              <p>Selected Floor: {selectedFloor}</p>
              <p>Selected Module: {selectedRoom}</p>
              <Button
                variant="primary"
                onClick={handleBooking}
                className="w-100"
              >
                Submit
              </Button>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SeatBookingDropdown;
