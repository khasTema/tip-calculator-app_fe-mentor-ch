import React from "react";

export default function Input(props){
    return(
        <label>
            <h4 className="label">{props.label}</h4>
            <span className="label">{props.errorLabel}</span>
            <input  type="number" 
                    name="bill" 
                    placeholder="bill" 
                    value={props.value}
                    onChange={props.changeFunc}/>
        </label>
    )
}