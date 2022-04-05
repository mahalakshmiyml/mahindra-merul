import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import * as Yup from "yup";

const Overview = () => {
  const onSubmit = (values) => {
    const data = values;

    console.log(data);

    axios
      .get(
        "email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        console.log(response);
        setformStatus(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setformStatus(error.data);
      });
  };

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
              <p>Welcome to the world of luxury living!</p>
              <p>A wonderful enclave of exclusive homes. The perfect address for those who wish to beat the daily commute to work and yet be insulated from the bustle of urban life.</p>
              <p>Mahindra Eden Apartments are complimented for a pious and perfect living that targets you to create a balance of space, comfort, and grandeur. The exquisite homes are an example of opulence and an establishment of a multitude of facilities. The large open spaces within the gated community where kids and seniors of the family a carefree and relish life to the fullest. Every member will indulge in something or the other fun activity and rejoice in prosperity.</p>
              <p>Mahindra Eden Kanakapura where excitement reaches the next level considered by solace and soothing. Designed with great planning and the finest building where you can lose in pure harmony and peace. Dive in the swimming pool for a refreshing feel, an exotic clubhouse for relaxing senses, and the extensive lawns for the children to frolic and rejuvenate for all residents.</p>
              <p>Enjoy the luxury of a fully equipped clubhouse with the gamut of recreational amenities including a swimming pool, gym, health club, indoor badminton court, party halls, billiards, table tennis, board games, reading room, and provision for a crèche.</p>
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
