import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

const Overview = () => {

  const [formStatus, setformStatus] = useState("");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });

  const onSubmit = () => {

  }
  return (
    <div id="overview" className="py-3 py-md-5 bg-light">
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="text-center text-primary py-3">
              About Mahindra - Eden
            </h2>
            <div className="p-3 rounded">
              <h3>CRAFTING NATURE POSITIVE HOMES</h3>
              <p>Nature goes beyond the greens.</p>
              <p>It is all-encompassing.</p>
              <p>
                It is a marvel of the collective physical world, including
                plants, animals, the landscape, and other features and products
                of the earth - everything that is not of human creation.
              </p>
              <p>
                Homes at Mahindra Eden come with the promise of enriching the
                lives of its people by delivering a lifestyle in harmony with
                the natural ecosystem.
              </p>
              <p>
                Life flourishes in and around these homes and the residents
                benefit from being one with nature. They feel calm and peaceful;
                their health improves. The cool winds refresh and revitalise.
              </p>
              <p>Residents thrive and live a fulfilling, wholesome life.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="p-3 bg-dark text-white rounded">
              <div className="py-3">
                <h2 className="text-center py-2">Schedule Site Visit</h2>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row>
                    <Col md={12}>
                      <div className="mb-5">
                        <Field
                          type="text"
                          className="form-control py-2"
                          id="name"
                          name="name"
                          placeholder="Name"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="name" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="mb-5">
                        <Field
                          type="email"
                          className="form-control py-2"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                        <small className="text-danger">
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="mb-5">
                        <Field
                          type="tel"
                          className="form-control py-2"
                          id="phone"
                          name="phone"
                          placeholder="Phone No."
                        />
                        <small className="text-danger">
                          <ErrorMessage name="phone" />
                        </small>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>
                      <div className="mb-3">
                        <Button className="btn btn-primary w-100" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Overview;
