import React from "react";

export default function Input(props){
    return(
        <label>
            {props.label}
            <span>{props.errorLabel}</span>
            <input type="number" name="bill" placeholder="bill" />
        </label>
    )
}