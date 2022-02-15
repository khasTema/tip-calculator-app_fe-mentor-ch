import React, {useRef} from "react";

export default function Buttons(props) {

    const btnEl = useRef(null)

    // function thisClickHandle(params) {
    //     console.log(btnEl.current.id)
    // }

    return <button  className="percent-set" 
                    id={props.id}
                    ref={btnEl}
                    onClick={props.clickFunction}>{props.number}</button> 
}