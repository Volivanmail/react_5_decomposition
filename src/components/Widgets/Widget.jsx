import React from "react";

function Widget(props) {
    return (
        <li className="widget">
            <h5>{props.title}</h5>
            {props.children}
        </li>
    )
}

export default Widget;