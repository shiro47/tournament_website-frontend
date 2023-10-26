import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light">
      <Container fluid>
        <Row className="py-4">
          <Col className="text-center">
            &copy; {new Date().getFullYear()} Tournament Website
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
