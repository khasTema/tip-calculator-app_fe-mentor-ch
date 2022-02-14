import React from "react";

import Reset from "./Reset";
import Result from "./Result";
import Input from "./Input";
import Buttons from "./Buttons";

function Calc(){
    return (
        <div className="calc--body">
            <div className="calc--settings">
                <Input />
                <Buttons />
                <Buttons />
                <Buttons />
                <Input />
            </div>
            <div className="calc--results">
                <Result />
                <Result />
                <Reset />
            </div>
        </div>
    )
}


export default Calc