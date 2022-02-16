import React, {useRef} from "react";

export default function Input(props){

    const inputEl = useRef(null)

    return(
        <label>
            <h4 className="label">{props.label}</h4>
            <span className="label">{props.errorLabel}</span>
            <img className="label-img" src={props.img} />
            <input  type="number" 
                    name="bill" 
                    placeholder="0.00" 
                    value={props.value}
                    ref={inputEl}
                    onChange={props.changeFunc}/>
        </label>
    )
}