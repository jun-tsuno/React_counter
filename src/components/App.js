import './App.css';
import React, { useState } from "react";
import Button from "./Button";

const App = () => {
    const [count, setCount] = useState(0);

    let isColor = '';
    if(count > 0) {
        isColor = 'green';
    } else if(count < 0) {
        isColor = 'red';
    }

        return(
            <div className='container'>
                <h1>COUNTER</h1>
                <p style={{color: isColor}}>{count}</p>
                <div className="buttons">
                    <Button name="INCREMENT" click={()=>setCount(count+1)} color={'increment'}/>
                    <Button name="RESET" click={()=>setCount(0)} color={'reset'}/>
                    <Button name="DECREMENT" click={()=>setCount(count-1)} color={'decrement'}/>
                </div>
            </div>
        );
    }

export default App;