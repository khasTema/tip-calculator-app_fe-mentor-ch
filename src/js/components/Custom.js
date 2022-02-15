import React, {useRef} from "react";



export default function Custom(props) {

    const inputEl = useRef(null)
    
    return <input   type="text" 
                    name="custom" 
                    ref={inputEl}
                    className="custom" 
                    placeholder="0.00"
                    value={props.passValue}
                    onChange={props.changeFunc}/>
}