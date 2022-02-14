import React, {useState} from "react";

import Reset from "./Reset";
import Result from "./Result";
import Input from "./Input";
import Buttons from "./Buttons";
import Custom from "./Custom";

function Calc(){

    const [bill, setBill] = useState(0)
    console.log(bill)
    const [numberOfPeple, setNumberOfPeople] = useState(0)
    const [isCustom, setIsCustom] = useState(false)

    function getPercent(id){
        console.log("percent" + id)
    }

    const percetRangeArr = [5, 10 , 15, 25 , 50,]
    const buttonsEl = percetRangeArr.map(item => {
        return (
            <Buttons 
                key={item}
                id={item}
                number={item + "%"}
                clickFunction={() => getPercent()}/>
        )
    })

   

    return (
        <div className="calc--body">
            <div className="calc--settings">
                <Input label={"Bill"} value={bill} changeFunc={(event) => setBill(event.current.value)}/>
                <h4 className="label">Select tip %</h4>
                <div className="buttons">
                    {buttonsEl}
                    {isCustom ? <Custom /> : <Buttons number={"Custom"} clickFunction={() => setIsCustom(true)}/>}
                </div>
                <Input label={'Number ofPeople'} errorLabel={"Cant't be zero"}/>
            </div>
            <div className="calc--results">
                <Result description={'Tip Ammout'}/>
                <Result description={'Total'}/>
                <Reset resetFunc={() => console.log("RESET APP")}/>
            </div>
        </div>
    )
}


export default Calc