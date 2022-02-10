import React from "react"
import image from "../images/Controller.png"
function Header(){
    return(
        <header>
            <img src={image} />
            <h1>My Gaming List</h1>
        </header>
    )
}
export default Header