import React, { useState, useEffect } from "react";
import SeatsImage from "/home/abhinav211/SeatBooking/src/assets/seats-svg-s4-final.svg?react";
import { Container, Row, Col } from "react-bootstrap";

const seatsSvg = ({ clickedSeat, handleSeatClick }) => {
  const [svgContent, setSvgContent] = useState(null);

  useEffect(() => {
    const seatsSvg = SeatsImage();
    setSvgContent(seatsSvg);
  }, []);

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

  const svgElement = renderSeats();

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <Row className="w-100">
        <Col className="d-flex justify-content-center align-items-center">
          <div style={{ width: "100%", maxWidth: "600px" }}>{svgElement}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default seatsSvg;
