import React from "react"

function Cards(props){
    return(
        <div className="cards grid-container" >
            <img src= {`../images/${props.img}`} ></img>
            <h1>{props.name}</h1>
            <h3>Rating: {props.rating}</h3>
            <h4>{props.description}</h4>
        </div>
    )
}
export default Cards