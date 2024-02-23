import { useState } from "react";

export default function Ludo(){
    const [move, setMove] = useState({blue: 0, green: 0, red: 0, yellow: 0})

    let incMoveBlue = () => {
        setMove((prevMove) => {
            return {...prevMove,blue: prevMove.blue += 1}
        })
    }
    let incMoveGreen = () => {
        setMove((prevMove) => {
            return {...prevMove,green: prevMove.green += 1}
        })
    }
    let incMoveYellow = () => {
        setMove((prevMove) => {
            return {...prevMove,yellow: prevMove.yellow += 1}
        })
    }
    let incMoveRed = () => {
        setMove((prevMove) => {
            return {...prevMove,red: prevMove.red += 1}
        })
    }

    return (
        <>  
            {/* Blue */}
            <h1>Blue : {move.blue}</h1>
            <button 
                onClick={incMoveBlue} 
                style={{backgroundColor : "blue"}} > +1 </button>
            {/* Green */}
            <h1>Green : {move.green}</h1>
            <button 
                onClick={incMoveGreen} 
                style={{backgroundColor : "green"}} > +1 </button>
            {/* Yellow */}
            <h1>Yellow : {move.yellow}</h1>
            <button 
                onClick={incMoveYellow} 
                style={{backgroundColor : "yellow", color: "black"}} > +1 </button>
            {/* Red */}
            <h1>Red : {move.red}</h1>
            <button 
                onClick={incMoveRed} 
                style={{backgroundColor : "red"}} > +1 </button>
            
        </>
    )
}