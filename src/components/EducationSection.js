import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import EducationInfo from './EducationInfo';

class EducationSection extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            items: [
                {
                    id: 0,
                    location: 'FIT4CODING – Esch, Luxembourg',
                    name: 'NumericALL/CodingJobs bootcamp',
                    details: [
                        'Certificates in web developper and integrator',
                        '490 hours of training in 4 months',
                        'SCRUM training',
                        'Final project: DAWA TD',
                    ],
                    date: '01/2020 - 5/2020',
                },
                {
                    id: 1,
                    location: 'House of training – Kirchberg, Luxembourg',
                    name: 'Fit4DigitalFuture',
                    details: [
                        'Database: Access/SQL',
                        'Wordpress',
                    ],
                    date: '11/2019 – 12/2019',
                },
                {
                    id: 2,
                    location: 'Essex University – Colchester, UK',
                    name: 'BSC Mathematics',
                    details: [
                        'Successful completion with 65% average (Graduated with a high 2:1)',
                        'Final year modules: Non Linear Programming, Combinatorial Optimization, Modelling Experimental Data, Statistical Methods...',
                        'Bachelor project: Galois theory'
                    ],
                    date: '10/2015 – 07/2019',
                },
                {
                    id: 3,
                    location: 'London On Campus – London, UK',
                    name: 'Foundation Programme: Mathematics and Economics',
                    details: [
                        'Successful completion with an average of 72% (incl. 97% in mathematics)',
                    ],
                    date: '01/2015 – 08/2015',
                },


            ]
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <div className={'cv-section-margin-top'}>

                        <h2 className={this.props.darkmode ? "cv-title-dark" : "cv-title"}>Education</h2>
                    </div>
                </Row>
                {this.state.items.map(item => (
                    <EducationInfo darkmode={this.props.darkmode} item={item} />
                ))}
            </Container>
        )
    }

}

export default EducationSection;