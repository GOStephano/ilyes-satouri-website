import React from 'react';
import cujo from "../assets/image/cujo.jpg";
import zerg from '../assets/image/zerg.png';

import Hero from '../components/Hero';
import Caroussel from '../components/Caroussel';
function HomePage(props) {
    // const [darkmode, setDarkMode] = React.useState(false);

    return (
        <div className={props.darkmode ? "dark-mode" : "light-mode"}>
            <div className="text-center ">
                <img src={zerg} className="cujo" alt="cujo" />
            </div>
            <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
            <div className="card-container">
                <Caroussel darkmode={props.darkmode} />
            </div>
        </div>
    );
}

export default HomePage;