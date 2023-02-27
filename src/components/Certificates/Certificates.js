import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import Particle from '../Particle';
import CertificatesCards from './CertificatesCards';
import Henry from '../../assets/certificates/henry.png';

function Certificates() {
    const { t } = useTranslation();
    return (
        <Container>
            <Particle />
            <Container>
                <Row xs={1} md={2} className="g-4">
                    <Col>
                        <CertificatesCards
                            title='hola'
                            imgPath={Henry}
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Certificates