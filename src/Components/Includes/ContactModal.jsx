import React, { useState } from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png"

const ContactModal = (props) => {
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
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-primary">
        <Modal.Title className="text-white text-titlecase border-0">
             {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* <div className="text-center py-3">
            <Image src={Logo} alt="" className="img-fluid" />
          </div> */}

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="p-3">
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="text"
                      className="form-control"
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
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="email"
                      className="form-control"
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
              <Row className="mb-3">
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter phone number"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  <div className="">
                    <Button className="btn btn-success text-white text-uppercase form-control" type="submit">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ContactModal;
