import React, {useRef} from "react";

export default function Input(props){

    const inputEl = useRef(null)

    return(
        <label>
            <h4 className="label">{props.label}</h4>
            <span className="label">{props.errorLabel}</span>
            <input  type="number" 
                    name="bill" 
                    placeholder="bill" 
                    value={props.value}
                    ref={inputEl}
                    onChange={props.changeFunc}/>
        </label>
    )
}