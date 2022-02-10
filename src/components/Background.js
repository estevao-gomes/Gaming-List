import React from "react"
import Cards from "./Cards.js"
import Data from "../Data.js"

function Content(){
    const gamesData = Data;
    const cards = gamesData.map((game)=>
        <Cards {...game}/>
    )
    return(
        <div className="background">
            <div className="content">
                {cards}
            </div>
        </div>
    )
}
export default Content