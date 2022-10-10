import './Button.css';
import React from "react";

const Button = (props) => {

    const colorClass = props.color;

    return(
    <div>
        <button type="button"
                className={`button ${colorClass}`}
                onClick={props.click}
                >{props.name}
        </button>
    </div>
    );
}


export default Button;