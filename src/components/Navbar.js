import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BtnToggleTheme from './BtnTottleTheme';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { TbCertificate } from 'react-icons/tb';

import { MdLanguage } from 'react-icons/md';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [lang, setLang] = useState('en');
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span />
        <span />
        <span />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
              className="nav-link-hover"
            >
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
              className="nav-link-hover"
            >
              {t('About')}
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
              className="nav-link-hover"
            >
              {t('Projects')}
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link
              as={Link}
              to="/certificates"
              onClick={() => updateExpanded(false)}
              style={{
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
              className="nav-link-hover"
            >
              {t('Certificates')}
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Navbar.Collapse>

      {!expand && (
        <Row>
          <Col className="col-sm-4">
            <BtnToggleTheme />
          </Col>

          <Col className="col-sm-4">
            <Dropdown onSelect={(e) => changeLanguage(e)}>
              <Dropdown.Toggle id="dropdown-basic">
                <MdLanguage style={{ fontSize: '26px' }} />{' '}
                {lang.toUpperCase()}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="en">EN</Dropdown.Item>
                <Dropdown.Item eventKey="es">ES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      )}
    </Navbar>
  );
}

export default NavBar;
