import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavScrollExample from "./components/Navbar";
import BookingPage from "./pages/booking";
import SeatBookingDropdown from "./components/dropDown.jsx";
import Welcome from "./pages/Welcome.jsx"
import './index.css';
function App() {
  return (
    <Router>
      <NavScrollExample />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/book-seat" element={<SeatBookingDropdown />} />
        <Route path="/seat" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
