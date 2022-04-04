import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProjectHighlights = () => {
  return (
    <div id="project-highlights" className="py-3 py-md-5">
        <h2 className="text-center text-primary py-3"> Project Highlights </h2>
        <div className="py-3">
        <Container>
            <Row className="justify-content-center">
                <Col md={2} className="xs-6 py-5 text-center text-white bg-color1"><p className="text-center"><strong>Phase 1 launch <br />270 units</strong></p></Col>
                <Col md={2} className="xs-6 py-5 text-center text-white text-center bg-color2"><p className="text-center"><strong>Total units- 527 <br />Tower-2 <br />Wings- 4 </strong></p></Col>
                <Col md={2} className="xs-6 py-5 text-center text-white bg-color3"><p className="text-center"><strong> 1 BHK <br /> 50 units </strong></p></Col>
                <Col md={2} className="xs-6 py-5 text-center text-white bg-color4"><p className="text-center"><strong>2-BHK <br /> 54 units </strong></p></Col>
                <Col md={2} className="xs-6 py-5 text-center text-white bg-color5"><p className="text-center"><strong>3-BHK <br /> 115 units </strong></p></Col>
                <Col md={2} className="xs-6 py-5 text-center text-white bg-color6"><p className="text-center"><strong>3 + Study <br /> 56 units</strong></p></Col>
            </Row>
        </Container>
        </div>

    </div>
  )
}

export default ProjectHighlights