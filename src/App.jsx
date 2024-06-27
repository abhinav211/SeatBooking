import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NavbarHeader from "./components/Header/Navbar.jsx";
import SeatLayout from "./pages/SeatBooking/seatLayout.jsx";
import Welcome from "./pages/Welcome.jsx";
import BookSeat from "./pages/bookSeat.jsx";
import "./index.css";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/seat") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    <>
      {showNavbar && <NavbarHeader />}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/bookseat" element={<BookSeat />} />
        <Route path="/seat" element={<SeatLayout />} />
      </Routes>
    </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
