import { useState } from "react";
import Happy from "./happy";

function LikeButton() {
    let [isLike, setIsLike] = useState(false)
    let changeLike = () => {
        setIsLike(!isLike)
    }
    let Styles = {
        fontSize: "10rem",
        color: "red"
    }

    return(
        <div>
            <h1>Like</h1>
            <p onClick={ changeLike } style={Styles}>
                { isLike ? <i className="fa-solid fa-heart"></i> :<i className="fa-regular fa-heart"></i> }
            </p>
            <Happy/>
        </div>
    )
}

export default LikeButton;