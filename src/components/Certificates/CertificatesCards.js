import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { BiLinkExternal } from "react-icons/bi";

function CertificatesCards(props) {
    const { t } = useTranslation();
    return (
        <Card className="project-card-view">
      <Card.Img variant="top" style={{height:'500px'}} src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp; {t('Link')}
        </Button>
        
      </Card.Body>
    </Card>
    );
}

export default CertificatesCards