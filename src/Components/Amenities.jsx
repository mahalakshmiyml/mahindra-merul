import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Amenities = () => {
  return (
    <div id="amenities" className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-primary text-center py-2"> Amenities</h2>
          <Col md={5} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <h4>Indoor Amenities</h4>
            <Row className="justify-content-center">
              <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
                <ul>
                  <li>Multipurpose hall</li>
                  <li>Squash Court</li>
                  <li>Spa</li>
                  <li>Mini theatre</li>
                  <li>Guest Rooms</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Indoor gym with Aerobics Zone</li>                  
                  <li>Library & business lounge</li>
                  <li>Indoor Games Room</li>                  
                  <li>Provision For Convenience store</li>
                  <li>Badminton court</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <h4>Additional nature-inspired feature spread across the project</h4>
            <Row className="justify-content-center">
              <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
                <ul>
                  <li>Botanical garden</li>
                  <li>Therapeutic garden</li>                  
                  <li>Bird Bath</li>
                  <li>Bird feeders</li>
                  <li>Nature Corridor</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Nature-inspired murals</li>
                  <li>Swinging cocoons</li>
                  <li>Nature's Lap</li>
                  <li>Natural Swings</li>
                  <li>Herb garden</li>
                  <li>Chaupals</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Amenities;
