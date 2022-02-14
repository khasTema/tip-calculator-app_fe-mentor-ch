import React from "react";

export default function Buttons(props) {
    return <button className="percent-set" onClick={() => props.clickFunction(props.id)}>{props.number}</button> 
}