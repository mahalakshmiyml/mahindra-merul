import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import AllImages from "./AllImages";
import MasterPlanImages from "./MasterPlanImages";
import ThreeBHKImages from "./ThreeBHKImages";
import OneBHKImages from "./OneBHKImages";
import TwoBHKImages from "./TwoBHKImages";
import FloorPlanImages from "./FloorPlanImages";

const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary">
        Master Plan & Floor Plans
      </h2>
      <Container>
        <Row>
          <Col>
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 text-dark justify-content-center"
            >
              <Tab eventKey="all" title="All" className="text-dark">
                <AllImages />
              </Tab>
              <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
                <MasterPlanImages />
              </Tab>
              <Tab eventKey="floor-plan" title="Floor Plans">
                {<FloorPlanImages />}
              </Tab>
              <Tab eventKey="one-bhk" title="1 BHK">
                {<OneBHKImages />}
              </Tab>
              <Tab eventKey="two-bhk" title="2 BHK">
                {<TwoBHKImages />}
              </Tab>
              <Tab eventKey="three-bhk" title="3 BHK">
                {<ThreeBHKImages />}
              </Tab>
             
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasterPlan;
