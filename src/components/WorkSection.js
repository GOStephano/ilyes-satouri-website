import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WorkInfo from './WorkInfo';

class WorkSection extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    name: 'Financial Analyst / Competitor - GO, Paris (Part time parallel to studies)',
                    details: [
                        'Financial Statements',
                        'Managing Accounts'
                    ],
                    date: '11/2016 – 03/2019',
                },
                {
                    id: 1,
                    name: 'Strategy Consultant / Competitor - Meltdown, Paris',
                    details: [
                        'Setting up international development strategies',
                        'Market analaysis & creation of new franchises'
                    ],
                    date: '11/2014 – 11/2016',
                },
                {
                    id: 2,
                    name: 'Starcraft II Professional Player',
                    details: [
                        'Titles: Double European champion, double World champion and 20+ other tournaments won',
                        'Thrived in a highly competitive environment', 'Public figure working closely with sponsors on advertising products',
                        'Rigorous training schedule similar to high achieving athletes in regular sports', 'Best non-Korean Starcraft II player (Teamliquid.net article, 2016)'
                    ],
                    date: '09/2010 – 06/2013',
                },
            ]
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <h2 className={this.props.darkmode ? "cv-title-dark" : "cv-title"}>Work experience</h2>
                </Row>
                {this.state.items.map(item => (
                    <WorkInfo darkmode={this.props.darkmode} item={item} />
                ))}
            </Container>
        )
    }

}

export default WorkSection;