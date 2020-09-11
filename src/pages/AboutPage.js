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

                        <Col xs={{ order: 12, span: 12 }} xl={{ order: 1, span: 3 }}>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"}>Frameworks</h2></Row>
                            <Row>
                                <ul className={'cv-margin-bottom cv-margin-top'}>
                                    <li>Bootstrap</li>
                                    <li>p5js - Phaser</li>
                                    <li>Angular</li>
                                    <li>React</li>
                                    <li>Laravel</li>
                                    <li>Wordpress</li>
                                </ul>
                            </Row>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"}>Programing languages</h2></Row>
                            <Row>
                                <ul className={'cv-margin-bottom cv-margin-top'}>
                                    <li>HTML5</li>
                                    <li>Javascript</li>
                                    <li>CSS/SASS</li>
                                    <li>PHP</li>
                                    <li>Python</li>
                                    <li>SQL</li>
                                </ul>
                            </Row>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"}>Languages</h2></Row>
                            <Row>
                                <ul className={'cv-margin-bottom cv-margin-top'} >
                                    <li>French - Native</li>
                                    <li>English - Fluent</li>
                                    <li>Arabic - Fluent</li>
                                </ul>
                            </Row>
                            <Row><h2 className={props.darkmode ? "cv-title-dark" : "cv-title"} >Interests</h2></Row>
                            <Row>
                                <ul className={'cv-margin-bottom cv-margin-top'}>
                                    <li>Gaming</li>
                                    <li>Chess</li>
                                    <li>Piano</li>
                                    <li>Electronic Music</li>
                                </ul>
                            </Row>

                        </Col>
                        <Col xs={{ order: 2, span: 0 }} xl={{ order: 1, span: 1 }}><div className={(props.darkmode ? "vertical-line-cv-dark " : "vertical-line-cv ") + ' d-none d-xl-block'}></div></Col>
                        <Col xs={{ order: 2, span: 0 }} xl={{ order: 1, span: 1 }}><div className={(props.darkmode ? "horizontal-line-cv-dark " : "horizontal-line-cv ") + ' d-xl-none'}></div></Col>
                        <Col xs={{ order: 1, span: 12 }} xl={{ order: 12, span: 8 }}>
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