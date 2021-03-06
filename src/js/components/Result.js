import React from "react";

function Result(props){
    return(
        <div className="result">
            <div className="result--description">
                <h5>{props.description}</h5>
                <span>/ person</span>
            </div>
            <h4 className="result--numbers">${props.result}</h4>
        </div>
    )
}


export default Result