import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import dogs from '../../assets/projects/digitalbooking.png';
import gusto from '../../assets/projects/amadhesivos.png';
import weather from '../../assets/projects/weather.png';
import quiosco from '../../assets/projects/quiosco.png';
import criptos from '../../assets/projects/criptos.png';
import citas from '../../assets/projects/citas.png';

import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')}{' '}
          <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>

        <Row
          style={{ justifyContent: 'center', paddingBottom: '10px' }}
        >
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogs}
              isBlog={false}
              title="Digital Booking"
              description={t('Proj2')}
              link="https://github.com/guadamontero/DigitalBooking-FinalProject-CTD"
              demo="https://digital-booking-final-project-ctd.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gusto}
              isBlog={false}
              title="Am Adhesivos"
              description={t('Proj3')}
              link="https://github.com/guadamontero/am_adhesivos"
              demo="http://www.amadhesivos.com.ar/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiosco}
              isBlog={false}
              title={t('Kiosk')}
              description={t('Proj4')}
              link="https://github.com/francocoll/Quiosco-Next"
              demo="https://quiosco-franco.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={criptos}
              isBlog={false}
              title="Criptos App"
              description={t('Proj5')}
              link="https://github.com/francocoll/criptos-react-vite"
              demo="https://cripto-franco.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citas}
              isBlog={false}
              title={t('Dates')}
              description={t('Proj6')}
              link="https://github.com/francocoll/citas_react_vite"
              demo="https://citas-franco.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title={t('Weather')}
              description={t('Proj1')}
              link="https://github.com/francocoll/weather-app"
              demo="https://weather-app-franco.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
