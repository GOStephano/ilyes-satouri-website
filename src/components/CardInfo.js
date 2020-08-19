import React from 'react';
import { useSpring, animated } from "react-spring";

function CardInfo(props) {

    //Animation on card when clicked
    const style = useSpring({ opacity: 1, from: { opacity: 0 } })

    return (
        <animated.div className="g-card-info" style={style}>
            {/* <a href={props.link} target="_blank" rel="noopener noreferrer"><p className="g-card-title">{props.title}</p></a> */}
            <p className="g-card-sub-title">{props.subTitle}</p>
            <p> {props.description} </p>
        </animated.div>
    );
}

export default CardInfo;