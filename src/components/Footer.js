import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from './Link';

function Footer(props) {

    return (
        <footer className="mt-5 bottom">
            <Container>
                <Row className="border-top justify-content-around p-3 center-text">
                    <Col className="p-0" md={3} sm={4}>
                        <div>
                            <h3>Work with me</h3>
                            <div className="flex-column my-4 nav">
                                <Link href="https://www.linkedin.com/in/ilyes-satouri-452a7390/" darkmode={props.darkmode} linkText='LinkedIn' />
                                <Link href="https://github.com/GOStephano" darkmode={props.darkmode} linkText='Github' />
                                {/* <a className="text-white px-0 nav-link" href="https://www.linkedin.com/in/ilyes-satouri-452a7390/"><p>LinkedIn</p></a> */}
                                {/* <a className="text-white px-0 nav-link" href="https://github.com/GOStephano"><p>Github</p></a> */}

                            </div>
                        </div>

                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3} sm={4}>
                        <div>
                            <h3>Play with me</h3>
                            <div className="flex-column my-4 nav">
                                <Link href="https://twitter.com/GO_Stephano" darkmode={props.darkmode} linkText='Twitter' />
                                <Link href="https://twitch.com/GOStephano" darkmode={props.darkmode} linkText='Twitch' />

                                {/* <a className="text-white px-0 nav-link" href="https://twitter.com/GO_Stephano"><p>Twitter</p></a> */}
                                {/* <a className="text-white px-0 nav-link" href="https://twitch.com/GOStephano"><p>Twitch</p></a> */}

                            </div>
                        </div>

                    </Col>
                </Row>
                {/* <Row className=" justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Ilyes Satouri
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <p>Twitter</p>
                        <p>Instagram</p>

                    </Col>
                </Row> */}
            </Container>
        </footer>
    )
}

export default Footer;