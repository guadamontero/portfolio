import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiJavascript1, DiReact } from 'react-icons/di';

import {
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTypescript,
} from 'react-icons/si';

function Techstack() {
  const techIcons = [
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'React', icon: <DiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },
    { name: 'SASS', icon: <SiSass /> },
  ];

  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      {techIcons.map((icon) => (
        <Col xs={4} md={2} className="tech-icons" key={icon.name}>
          {icon.icon}
          <p style={{ fontSize: '12px' }}>{icon.name}</p>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
