import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import Particle from '../Particle';
import CertificatesCards from './CertificatesCards';
import Henry from '../../assets/certificates/henry.png';
import English from '../../assets/certificates/english.png';
import Udemy from '../../assets/certificates/udemy.png';
import linkedin from '../../assets/certificates/linkedin.png';

function Certificates() {
    const { t } = useTranslation();
    return (
        <Container fluid className='project-section'>
            <Particle />
            <Container>
                <h1 className="project-heading">
                    <strong className="green">{t('Certificates')} </strong>
                </h1>
                <Row xs={1} md={2} className="g-4 mt-5">
                    <Col style={{ height: '100%' }}>
                        <CertificatesCards
                            title={`Full Stack Developer ${t('Certificate')} ${t('From')} Henry`}
                            imgPath={Henry}
                            link='https://certificates.soyhenry.com/new-cert?id=94ccda5257fd562f184cda44ad787a405844711f40625cbdcee9c4bc3f19924c'
                        />
                    </Col>
                    <Col>
                        <CertificatesCards
                            title={`EF SET English Test 68/100 C1 - Advanced`}
                            imgPath={English}
                            link='https://www.efset.org/cert/rVQ7rv'
                        />
                    </Col>
                    <Col>
                        <CertificatesCards
                            title={`React: ${t('Guide')} (Hooks, React Router, Redux, Next.js) 15 Apps`}
                            imgPath={Udemy}
                            link='https://www.udemy.com/certificate/UC-97e8528c-9ee1-4250-ba40-d125c7966c76/'
                        />
                    </Col><Col>
                        <CertificatesCards
                            title={`${t('Last')}`}
                            imgPath={linkedin}
                            link='https://www.linkedin.com/learning/certificates/125e5ae5df78dc7da30284ec46b4182067d9a9f156192a84fbacf58ac18d5985'
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Certificates