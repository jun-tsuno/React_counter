import './App.css';
import React from "react";
import Button from "./Button";

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { count: 0 };
    }

    onIncrement = () => {
        this.setState(state => ({
            count: state.count + 1
        }))
    };

    onReset = () => {
        this.setState(state => ({
            count: 0
        }))
    };

    onDecrement = () => {
        this.setState(state => ({
            count: state.count - 1
        }))
    };

    render() {
        return(
            <div className='container'>
                <h1>COUNTER</h1>
                <p>{this.state.count}</p>
                <div className="buttons">
                    <Button name="INCREMENT" click={this.onIncrement}/>
                    <Button name="RESET" click={this.onReset}/>
                    <Button name="DECREMENT" click={this.onDecrement}/>
                </div>
            </div>
        );
    }
}

export default App;