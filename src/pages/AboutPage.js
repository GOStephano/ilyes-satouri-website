import React from 'react';
import Hero from '../components/Hero';
import Content from "../components/Content";

import police from '../assets/image/stephpolice.jpg'

function AboutPage(props) {

    return (
        <div>
            <Hero title={props.title} />
            <Content>
                <h1>Trustworthy.</h1>
                <img src={police} alt='police' />
            </Content>
        </div>
    );
}

export default AboutPage;