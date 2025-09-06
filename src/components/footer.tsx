import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={3}>
            <h6>Portfolio Website</h6>
          </Col>
          <Col md={6} className="text-center">
          </Col>
          <Col md={3} className="text-right">
            <h6>&copy; {new Date().getFullYear()} Jun Kit Lim. All rights reserved.</h6>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
