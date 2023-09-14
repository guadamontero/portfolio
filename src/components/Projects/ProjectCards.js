import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { BiLinkExternal } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { FaYoutube } from 'react-icons/fa';

function ProjectCards(props) {
  const { t } = useTranslation();
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: 'justify' }}>
          {props.description}
        </Card.Text>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <Button variant="primary" href={props.link} target="_blank">
            <BiLinkExternal /> &nbsp; {t('View')}
          </Button>
          <Button
            variant="secondary"
            href={props.demo}
            target="_blank"
          >
            <BiLinkExternal /> &nbsp; Demo
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
