import React from "react";
import "./Landing.css"

export default function FeatProps({src,text1,text2}){
    return(
        <>
        <div className="container">
            <div className="image">
            <img src={src} alt="" id="feat-icons" />
            </div>
           <div className="text">
               <h2 id="fprop-h2">{text1}</h2>
               <p id="fprop-p">{text2}</p>
           </div>
        </div>
        </>
    )
}