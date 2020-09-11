import React from 'react';
import CardInfo from "./CardInfo";

import Link from './Link';
function Card(props) {

    return (
        <div className="d-inline-block g-card" >
            <div className="lang-logo-container">
                {props.item.langIcon.map(icon => (
                    <a href={icon[1]} target="_blank" rel="noopener noreferrer"><img className="lang-logo-image" src={icon[0]} alt={icon[1]} /></a>
                    // <Link />
                ))}
                {/* {props.darkmode ? 'dark' : 'bright'} */}

            </div>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc} onClick={(e) => props.click(props.item)} />
            {/* <a href={props.item.link} target="_blank" rel="noopener noreferrer " className="text-white px-0 text-decoration-none"><p className="g-card-title ">{props.item.title}</p></a> */}
            <div className="g-card-title " >
                <Link darkmode={props.darkmode} href={props.item.link} linkText={props.item.title} />
            </div>
            <div className="g-card-description">
                {props.item.selected && <CardInfo darkmode={props.darkmode} title={props.item.title} subTitle={props.item.subTitle} link={props.item.link} description={props.item.description} />}

            </div>

        </div>
    );
}

export default Card;
