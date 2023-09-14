import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" />

        <Col md="4" className="footer-copyright">
          <h3>{year} Guadalupe Montero</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://github.com/guadamontero"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '27px' }}
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://www.linkedin.com/in/guadalupe-montero/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '27px' }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="mailto:guadamontero10@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '27px' }}
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://wa.me/+543515186464"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '27px' }}
              >
                <BsWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body" />
      </Row>
    </Container>
  );
}

export default Footer;
