import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiTrello,
  SiSlack
} from "react-icons/si";


function Toolstack() {

  const techIcons = [
    { name: 'Git', icon: <SiGit /> },
    { name: 'VSCode', icon: <SiVisualstudiocode /> },
    { name: 'GitHub', icon: <SiGithub /> },
    { name: 'Trello', icon: <SiTrello /> },
    { name: 'Slack', icon: <SiSlack /> },

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

export default Toolstack;
