import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Amenities = () => {
  return (
    <div id="amenities" className="py-3 py-md-5 bg-light">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-primary text-center py-2"> Amenities</h2>
          <Col md={5} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <h4>Health & Sports</h4>
            <Row className="justify-content-center">
              <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
                <ul>
                  <li>Badminton courts</li>
                  <li>Squash court</li>
                  <li>Indoor gymnasium</li>
                  <li>Tennis court</li>
                  <li>Basketball court</li>
                  <li>Outdoor gym</li>
                  <li>Pool tables</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Jogging track</li>
                  <li>Aerobics studio</li>
                  <li>Billiards table</li>
                  <li>Swimming pools and kids pool</li>
                  <li>Tennis court</li>
                  <li>Skating rink</li>
                  <li>Volleyball court</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="pt-3 pb-3 pt-md-2 pb-md-2">
            <h4>Others</h4>
            <Row className="justify-content-center">
              <Col md={4} xs={6} className="pt-2 pb-2 pt-md-0">
                <ul>
                  <li>Crèche</li>
                  <li>Kids’ play areas</li>
                  <li>Linear park</li>
                  <li>Party halls</li>
                  <li>Party lawn</li>
                  <li>Pet park</li>
                  <li>Amphitheatre</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li>Laundry</li>
                  <li>Convenience store</li>
                  <li>Salon</li>
                  <li>Barbeque Area</li>
                  <li>Cards Room</li>
                  <li>Board Games Area</li>
                  <li>Reading Room</li>
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
