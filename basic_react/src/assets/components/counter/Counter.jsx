import { useState } from "react";

export default function Counter(){

    const[count, setCount] = useState(0)
    function incCount(){
        let newCount = count + 1
        setCount(newCount)
    }

    return(
        <div>
            <h1>Counte : {count}</h1>
            <button onClick={incCount} >Click</button>
        </div>
    )
}