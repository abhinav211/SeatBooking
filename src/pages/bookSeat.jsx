import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Sky from "../assets/sky.jpeg";
import MyDatePicker from "../components/Date/Date";

const data = {
  USA: {
    "New York": { 8: ["S1", "S2", "S3", "S4"] },
    "San Francisco": { 3: ["S1", "S2"] }
  },
  Canada: {
    Toronto: { 5: ["S1", "S2", "S3"] },
    Vancouver: { 2: ["S1"] }
  }
};

function BookSeat() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigate = useNavigate();

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setSelectedLocation(null);
    setSelectedFloor(null);
    setSelectedRoom(null);
  };

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setSelectedFloor(null);
    setSelectedRoom(null);
  };

  const handleFloorChange = (floor) => {
    setSelectedFloor(floor);
    setSelectedRoom(null);
  };

  const handleRoomChange = (room) => {
    setSelectedRoom(room);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBooking = () => {
    navigate("/seat", {
      state: {
        country: selectedCountry,
        location: selectedLocation,
        floor: selectedFloor,
        room: selectedRoom,
        date: selectedDate
      }
    });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-5 p-3">
      <Card className="shadow-lg rounded-3" style={{ width: "400px" }}>
        <div style={{ height: "150px", overflow: "hidden" }}>
          <Card.Img variant="top" src={Sky} className="w-100 h-100 object-fit-scale" />
        </div>
        <Card.Body>
          <div className="mb-3">
            <h6>Select Country</h6>
            <div className="d-flex flex-wrap">
              {Object.keys(data).map((country) => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "primary" : "outline-primary"}
                  className="m-1 btn-sm"
                  onClick={() => handleCountryChange(country)}
                >
                  {country}
                </Button>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <h6>Select Location</h6>
            <div className="d-flex flex-wrap">
              {selectedCountry &&
                Object.keys(data[selectedCountry]).map((location) => (
                  <Button
                    key={location}
                    variant={selectedLocation === location ? "primary" : "outline-primary"}
                    className="m-1 btn-sm"
                    onClick={() => handleLocationChange(location)}
                  >
                    {location}
                  </Button>
                ))}
            </div>
          </div>
          <div className="mb-3">
            <h6>Select Floor</h6>
            <div className="d-flex flex-wrap">
              {selectedLocation &&
                Object.keys(data[selectedCountry][selectedLocation]).map((floor) => (
                  <Button
                    key={floor}
                    variant={selectedFloor === parseInt(floor) ? "primary" : "outline-primary"}
                    className="m-1 btn-sm"
                    onClick={() => handleFloorChange(parseInt(floor))}
                  >
                    Floor {floor}
                  </Button>
                ))}
            </div>
          </div>
          <div className="mb-3">
            <h6>Select Room</h6>
            <div className="d-flex flex-wrap">
              {selectedFloor !== null &&
                data[selectedCountry][selectedLocation][selectedFloor].map((room) => (
                  <Button
                    key={room}
                    variant={selectedRoom === room ? "primary" : "outline-primary"}
                    className="m-1 btn-sm"
                    onClick={() => handleRoomChange(room)}
                  >
                    {room}
                  </Button>
                ))}
            </div>
          </div>
          <div className="mb-3">
            <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
          </div>
          <div className="d-flex justify-content-end">
            <Button variant="primary" className="w-100" onClick={handleBooking} disabled={!selectedRoom}>
              Book Seat
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BookSeat;
