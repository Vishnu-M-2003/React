import { useState } from "react";

function Counter(){

    let [count, setCount] = useState(0)
    let increment = () =>{
        setCount(count + 1)
    }

    return(
        <div>
            <h3>Count = { count }</h3>
            <button onClick={ increment } >Click</button>
        </div>
    )
}

export default Counter;