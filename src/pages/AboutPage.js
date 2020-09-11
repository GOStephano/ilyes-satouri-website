import React from 'react';
import Hero from '../components/Hero';
import Content from "../components/Content";
import Container from 'react-bootstrap/Container';
import WorkSection from '../components/WorkSection';
import EducationSection from '../components/EducationSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <Container>
                    <Row>
                        <Col xs={3}>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"}>Frameworks</h2></Row>
                            <Row>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>P5 - Phaser</li>
                                    <li>Angular</li>
                                    <li>Laravel</li>
                                    <li>Wordpress</li>
                                </ul>
                            </Row>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"}>Programing languages</h2></Row>
                            <Row>
                                <ul>
                                    <li>HTML5</li>
                                    <li>Javascript</li>
                                    <li>CSS/SASS</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </Row>

                        </Col>
                        <Col xs={1}><div className={props.darkmode ? "vertical-line-cv-dark" : "vertical-line-cv"}></div></Col>
                        <Col xs={8}>
                            <WorkSection darkmode={props.darkmode}></WorkSection>
                            <EducationSection darkmode={props.darkmode}></EducationSection>

                        </Col>
                    </Row>

                </Container>


            </Content>
        </div>
    );
}

export default AboutPage;