import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import Sky from "../../src/assets/sky.jpeg";
import MyDatePicker from "../components/Date/Date";
import {
  setSelectedCountry,
  setSelectedLocation,
  setSelectedFloor,
  setSelectedRoom,
  setSelectedDate,
} from "../../src/Store/store.jsx";
import axios from 'axios'; 

function BookSeat() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    selectedCountry,
    selectedLocation,
    selectedFloor,
    selectedRoom,
    selectedDate,
  } = useSelector((state) => state.booking);

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://mocki.io/v1/f27d5449-b9ff-4f1f-94b4-ce8f75e98a21');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handlers = useCallback({
    handleCountryChange: (country) => dispatch(setSelectedCountry(country)),
    handleLocationChange: (location) => dispatch(setSelectedLocation(location)),
    handleFloorChange: (floor) => dispatch(setSelectedFloor(floor)),
    handleRoomChange: (room) => dispatch(setSelectedRoom(room)),
    handleDateChange: (date) => dispatch(setSelectedDate(date)),
  }, [dispatch]);

  const handleBooking = () => {
    navigate("/seat");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container pt-90" style={{ paddingTop: "90px" }}>
      <div className="row justify-content-center">
        <div className="col-md-5">
          <Card
            className="shadow-lg rounded-3"
            style={{ maxHeight: "80vh", overflowY: "auto" }}
          >
            <div style={{ height: "250px", overflow: "hidden" }}>
              <Card.Img
                variant="top"
                src={Sky}
                className="w-100 h-100 object-fit-scale"
              />
            </div>
            <Card.Body>
              <SelectionSection
                title="Select Country"
                options={Object.keys(data)}
                selected={selectedCountry}
                onChange={handlers.handleCountryChange}
              />
              {selectedCountry && (
                <SelectionSection
                  title="Select Location"
                  options={Object.keys(data[selectedCountry] || {})}
                  selected={selectedLocation}
                  onChange={handlers.handleLocationChange}
                />
              )}
              {selectedLocation && (
                <SelectionSection
                  title="Select Floor"
                  options={Object.keys(data[selectedCountry]?.[selectedLocation] || {})}
                  selected={selectedFloor}
                  onChange={(floor) => handlers.handleFloorChange(parseInt(floor))}
                  prefix="Floor "
                />
              )}
              {selectedFloor !== null && (
                <div className="mb-3">
                  <h6>Select Room</h6>
                  <select
                    className="form-select"
                    value={selectedRoom}
                    onChange={(e) => handlers.handleRoomChange(e.target.value)}
                  >
                    <option value="">Select Room</option>
                    {data[selectedCountry]?.[selectedLocation]?.[selectedFloor]?.map(
                      (room) => (
                        <option key={room} value={room}>
                          {room}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}
              <div className="mb-3">
                <MyDatePicker
                  selectedDate={selectedDate}
                  onDateChange={handlers.handleDateChange}
                />
              </div>
              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="w-100"
                  onClick={handleBooking}
                  disabled={!selectedRoom}
                >
                  Book Seat
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

function SelectionSection({ title, options, selected, onChange, prefix = "" }) {
  return (
    <div className="mb-3">
      <h6>{title}</h6>
      <div className="d-flex flex-wrap">
        {options.map((option) => (
          <Button
            key={option}
            variant={selected === option ? "primary" : "outline-primary"}
            className="m-1 btn-sm"
            onClick={() => onChange(option)}
          >
            {prefix}{option}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default BookSeat;