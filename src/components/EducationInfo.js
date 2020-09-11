import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function EducationInfo(props) {

    return (
        <div className="margin-top-cv">
            <Col md={{ span: 5, offset: 7 }} className="margin-bot-cv">
                <div className={props.darkmode ? "cv-date-dark" : "cv-date"}>
                    {props.item.date}
                </div>
            </Col>
            <Row>
                <Col>
                    <Row><h3 className={props.darkmode ? "cv-title-dark" : "cv-title"}>{props.item.location}</h3></Row>
                    <Row><h4 className={props.darkmode ? "cv-title-dark" : "cv-title"}>{props.item.name}</h4></Row>
                    <Row>
                        <ul>
                            {props.item.details.map(detail => (
                                <li>{detail}</li>
                            ))}
                        </ul>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default EducationInfo;
