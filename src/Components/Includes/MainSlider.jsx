import React, { useState } from "react";
import { Button, Carousel } from "react-bootstrap";
import Image1 from "../../images/slider/image-1.png";
import Image2 from "../../images/slider/imag-2.png";
import Image3 from "../../images/slider/image-3.png";
import ContactModal from "./ContactModal";

const MainSlider = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SlidingImages = [
    {
      id: 1,
      ImageUrl: Image1,
      alt: "",
    },
    {
      id: 2,
      ImageUrl: Image2,
      alt: "",
    },
    {
      id: 3,
      ImageUrl: Image3,
      alt: "",
    },
  ];
  return (
    <>
      <Carousel>
        {SlidingImages.map((image) => (
          <Carousel.Item interval={1000} key={image.id}>
            <img
              className="d-block w-100"
              src={image.ImageUrl}
              alt={image.alt}
            />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

      <div id="custom-content" className="d-block d-md-none">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ps-0 pe-0">
              <h2 className="text-center text-white bg-danger p-2 text-uppercase">
                <Button
                  onClick={handleShow}
                  className="my-2 bg-transparent border-0 fs-2 fw-bold text-uppercase"
                >
                  Booking Open
                </Button>
              </h2>
              <h1 className="text-center text-danger text-uppercase">
                Mahindra Eden
              </h1>
              <h3 className="text-danger">
                {/* Pre-Launching Purva Sparkling Springs Phase-2 */}
              </h3>
              <div className="pb-2 text-center">
                Kanakapura Road, Bangalore.
              </div>
              <div className="bg-dark p-3 text-white">
                <ul className="list-unstyled text-center">
                  <li>
                    <strong>Property Type:</strong> Residential Apartments
                  </li>
                  <li>
                    <strong>Unit Type </strong> 2, 3 & 4 BHK
                  </li>
                  <li>
                    <strong>Project Status: </strong> Under Construction
                  </li>
                  {/* <li>
                      Luxury 3 & 4 BHK Villas. Starts with{" "}
                      <strong>₹ 3 Crore*</strong> Onwards
                    </li> */}
                </ul>
                <div className="text-center">
                  <Button
                    onClick={handleShow}
                    className="my-2 bg-danger border-0 text-uppercase"
                  >
                    Download Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="desktop-content" className="d-none d-md-block">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="wraper position-absolute">
                <h2 className="text-center text-white bg-danger p-2 text-uppercase">
                  <Button
                    onClick={handleShow}
                    className="my-2 bg-transparent border-0 fs-2 fw-bold text-uppercase"
                  >
                    Booking Open
                  </Button>
                </h2>
                <h1 className="text-center text-danger text-uppercase">
                  Mahindra Eden
                </h1>
                <h3 className="text-danger">
                  {/* Pre-Launching Purva Sparkling Springs Phase-2 */}
                </h3>
                <div className="pb-2 text-center">
                  Kanakapura Road, Bangalore.
                </div>
                <div className="bg-dark p-3 text-white">
                  <ul className="list-unstyled text-center">
                    <li>
                      <strong>Property Type:</strong> Residential Apartments
                    </li>
                    <li>
                      <strong>Unit Type </strong> 2, 3 & 4 BHK
                    </li>
                    <li>
                      <strong>Project Status: </strong> Under Construction
                    </li>
                    {/* <li>
                      Luxury 3 & 4 BHK Villas. Starts with{" "}
                      <strong>₹ 3 Crore*</strong> Onwards
                    </li> */}
                  </ul>
                  <div className="text-center">
                    <Button
                      onClick={handleShow}
                      className="my-2 bg-danger border-0 text-uppercase"
                    >
                      Download Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactModal
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
      />
    </>
  );
};

export default MainSlider;
