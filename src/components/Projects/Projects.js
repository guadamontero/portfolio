import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import dogs from '../../assets/projects/digitalbooking.png';
import gusto from '../../assets/projects/amadhesivos.png';
import weather from '../../assets/projects/cardsuper.png';
import quiosco from '../../assets/projects/growking.png';
import criptos from '../../assets/projects/drinking.png';
import citas from '../../assets/projects/manage.png';
import petshop from '../../assets/projects/petshop.png';
import masterdev from '../../assets/projects/marterdev.png';
import pampaseg from '../../assets/projects/pampaseg.png';
import gallery from '../../assets/projects/galler.png';

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
              imgPath={gallery}
              isBlog={false}
              title="Gallery Practise"
              description={t('Proj8')}
              link="https://github.com/guadamontero/gallery"
              demo="https://gallery-practise.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pampaseg}
              isBlog={false}
              title="Chimpance Digital Challenge"
              description={
                <div>
                  {t('Proj7')}
                  <div>
                    <a
                      href="https://www.figma.com/file/ybZLQUM36Km2PdxKpKZAXM/Challenge---PampaSeg?type=design&node-id=280-2464&mode=design&t=N7sNcNMc8qNGElE9-0"
                      target="_blank"
                    >
                      Link Figma
                    </a>
                  </div>
                </div>
              }
              link="https://github.com/guadamontero/DigitalBooking-FinalProject-CTD"
              demo="https://guadamontero.github.io/chimpancechallenge/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dogs}
              isBlog={false}
              title="Digital Booking"
              description={
                <div>
                  {t('Proj2')}
                  <div>
                    <a
                      href="https://www.youtube.com/watch?v=TAFyEN0-hso&t=1s"
                      target="_blank"
                    >
                      Video Demo
                    </a>
                  </div>
                </div>
              }
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
              title={'GrowKing'}
              description={t('Proj4')}
              link="https://github.com/guadamontero/GrowKing"
              demo="https://grow-king.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={criptos}
              isBlog={false}
              title="DrinKing"
              description={t('Proj5')}
              link="https://github.com/guadamontero/DrinKing"
              demo="https://drin-king.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={citas}
              isBlog={false}
              title={'Manage'}
              description={t('Proj6')}
              link="https://github.com/guadamontero/HTML-CSS-Manage"
              demo="https://guadamontero.github.io/HTML-CSS-Manage/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={masterdev}
              title={'MasterDev'}
              description={t('Proj1')}
              link="https://github.com/guadamontero/SASS-MasterDev"
              demo="https://guadamontero.github.io/SASS-MasterDev/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petshop}
              title={'Petshop'}
              description={t('Proj1')}
              link="https://github.com/guadamontero/HTML-CSS-PetShop"
              demo="https://guadamontero.github.io/HTML-CSS-PetShop/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              title={'Cards Supers'}
              description={t('Proj1')}
              link="https://github.com/guadamontero/HTML-CSS-CardSupers"
              demo="https://guadamontero.github.io/HTML-CSS-CardSupers/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
