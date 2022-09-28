import './Button.css';
import React from "react";

class Button extends React.Component {
    render() {
        return(
        <div>
            <button type="button"
                    className="button"
                    onClick={this.props.click}
                    >{this.props.name}
            </button>
        </div>
        );
    }
}

export default Button;