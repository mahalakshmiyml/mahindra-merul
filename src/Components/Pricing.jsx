import React, { useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import ContactModal from "./Includes/ContactModal";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div id="pricing" className="bg-light py-3 py-md-5">
      <h2 className="text-center"> Pricing</h2>
      <h3 className="text-center"> Coming Soon</h3>
      {/* <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <div className="">
              <h2 className="text-primary text-center py-2">Pricing</h2>
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
                      3 BHK 2T<br /> 
                    </td>
                    <td>1372</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>                  <tr>
                    <td>
                      3 BHK 2T 
                    </td>
                    <td>1433</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={handleShow}
                        className="my-3"
                      >
                        Download Price Sheet
                      </Button>
                    </td>
                  </tr>                  <tr>
                    <td>
                      3 BHK 3T 
                    </td>
                    <td>1612</td>
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
                    <td>
                      3 BHK 3T
                    </td>
                    <td>1630</td>
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
                    <td>
                      3 BHK 3T<br /> (Large)
                    </td>
                    <td>1937</td>
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
                    <td>
                      4 BHK <br /> (3BHK + Studio)
                    </td>
                    <td>2309</td>
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
      </Container> */}

      <ContactModal show={show} handleClose={handleClose} title="Download Pricesheet" />
    </div>
  );
};

export default Pricing;
