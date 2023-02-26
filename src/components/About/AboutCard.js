import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('Greeting')} {t('Im')} <span className="green">Franco Coll</span>, {t('MLE')} {t('IWorkAt')} <span className="green">{t('Company')}</span> {t('CompanyLocation')}.
            <br />
            {t('IHoldDegree1')} <span className="green">{t('Engineering')}</span> {t('School1')} {t('And')} <span className="green">Full Stack Developer</span> {t('School2')}.

            <br />
            <br />
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Full Stack Developer
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Front-End Developer
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Systems Engineering
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Software Developer
            </li>
          </ul>
        </blockquote>
        <div style={{ display: 'flex', marginTop: '1rem', padding: '1rem', gap: '2rem' }}>
          <Button size="lg">
            <a style={{ textDecoration: 'none', color: 'white' }} href={t('cv')} target='_blank' rel='noreferrer'>
              {t('View2')} CV
            </a>
          </Button>

        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
