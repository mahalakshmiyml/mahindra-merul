import axios from 'axios';
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import { Col, Container, Image, Row, Button } from 'react-bootstrap'
import * as Yup from "yup";

const GetInTouch = () => {

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
    <div className="py-3 py-md-5" id="get-in-touch">
        <h2 className="text-center text-white">Get in Touch</h2>
        <Container>
        <div className="p-3 text-white rounded">
             <Row className="justify-content-center">
               <Col md={6} className="align-self-center">
                 
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                <Form>
                  <Row>
                    <Col md={10}>
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
                    <Col md={10}>
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
                    <Col md={10}>
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
                    <Col md={10}>
                      {formStatus ? (
                        <div className="alert alert-success p-3 text-center">
                          {formStatus}
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                  <Row>
                    <Col md={10}>
                      <div className="mb-3">
                        <Button className="btn btn-primary w-100" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              </Formik>
               </Col>
               <Col md={6} className="align-self-center">
                 <div className="text-center p-4">
                   <a
                href="tel:081472037710"
                className="bg-primary p-3 rounded-circle m-2"
              >
                <i
                  className="fa fa-volume-control-phone text-white fs-5"
                  aria-hidden="true"
                ></i>
                <span className="d-block d-md-none"></span>
                </a>     
                 </div>
                 
                 <h3> WhatsApp</h3>
               </Col>
             </Row>
            </div>
        </Container>

    </div>
  )
}

export default GetInTouch