import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiMysql,
} from "react-icons/di";

import { SiNextdotjs, SiPostgresql, SiExpress, SiRedux, SiTailwindcss, SiBootstrap, SiHtml5, SiCss3 } from 'react-icons/si'



function Techstack() {

  const techIcons = [
    { name: 'JavaScript', icon: <DiJavascript1 /> },
    { name: 'Python', icon: <DiPython /> },
    { name: 'Node.js', icon: <DiNodejs /> },
    { name: 'React', icon: <DiReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss /> },
    { name: 'Bootstrap', icon: <SiBootstrap /> },
    { name: 'MongoDB', icon: <DiMongodb /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'SQL', icon: <DiMysql /> },
    { name: 'HTML', icon: <SiHtml5 /> },
    { name: 'CSS', icon: <SiCss3 /> },


  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techIcons.map(icon =>
        <Col xs={4} md={2} className="tech-icons" key={icon.name}>
          {icon.icon}
          <p style={{ fontSize: '12px' }}>{icon.name}</p>
        </Col>
      )}
    </Row>
  );
}

export default Techstack;
