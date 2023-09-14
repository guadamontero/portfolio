import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaCheck } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { Button } from 'react-bootstrap';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            {t('Greeting')} {t('Im')}{' '}
            <span className="green">Guadalupe Montero</span>,{' '}
            {t('MLE')} {t('IWorkAt')}{' '}
            <span className="green">{t('Company')}</span>{' '}
            {t('CompanyLocation')}.
            <br />
            {t('IHoldDegree1')}{' '}
            <span className="green">{t('Engineering')}</span>{' '}
            {t('School2')}.
            <br />
            <br />
          </p>
        </blockquote>
        <div
          style={{
            display: 'flex',
            marginTop: '1rem',
            padding: '1rem',
            gap: '2rem',
            justifyContent: 'center',
          }}
        >
          <Button size="lg">
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href={t('cv')}
              target="_blank"
              rel="noreferrer"
            >
              {t('View2')} CV
            </a>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
