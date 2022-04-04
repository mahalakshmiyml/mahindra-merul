import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ContactModal from "./Includes/ContactModal";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="pricing" className="bg-light py-3 py-md-5">
      <h2 className="text-center text-primary"> Pricing</h2>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="py-3">
              <Table
                responsive="sm"
                className="align-middle text-center border-transparent"
                striped
                bordered
                hover
              >
                <thead>
                  <tr>
                    <th>BHK</th>
                    <th>Area (Sq.ft)</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      1 BHK
                      <br />
                    </td>
                    <td>600</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr>
                    <td>2 BHK </td>
                    <td>1200</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>{" "}
                  <tr> 
                    <td>3 BHK</td>
                    <td>1600 to 1800</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>3BHK+ Study</td>
                    <td>2000</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>

      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
      />
    </div>
  );
};

export default Pricing;
