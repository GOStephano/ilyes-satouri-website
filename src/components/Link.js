import React from 'react';

function Link(props) {

    return (
        <a target="_blank" className={props.darkmode ? "dark-mode-link" : "light-mode" + ' text-decoration-none;'} href={props.href} > {props.linkText} </a>
    )
}

export default Link