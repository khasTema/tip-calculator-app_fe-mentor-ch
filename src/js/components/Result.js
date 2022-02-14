import React from "react";

function Result(props){
    return(
        <div className="result">
            <div className="result--description">
                <h5>Tip Ammount</h5>
                <span>/ person</span>
            </div>
            <h4 className="result--numbers">$0.00</h4>
        </div>
    )
}


export default Result