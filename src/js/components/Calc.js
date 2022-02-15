import React, {useState, useRef, useEffect} from "react";

import Reset from "./Reset";
import Result from "./Result";
import Input from "./Input";
import Buttons from "./Buttons";
import Custom from "./Custom";
// import { number } from "prop-types";

function Calc(){

    const [bill, setBill] = useState('')
    const [numberOfPeple, setNumberOfPeople] = useState(1)
    const [isCustom, setIsCustom] = useState(false)
    const [tipAmmount, setTipAmmount] = useState(0)
    const [total, setTotal] = useState(0)
    console.log(total)
    const [tipPercent, setTipPercent] = useState(0)
    // console.log("ti percent")
    // console.log(tipPercent)

    
    // since id is the exact number of percents, I use this for calculation
    function getPercent(btn){
        setTipPercent(Number(btn.target.id))
    }

    const percetRangeArr = [5, 10 , 15, 25 , 50,]
    const buttonsEl = percetRangeArr.map(item => {
        return (
            <Buttons
                key={item}
                id={item}
                number={item + "%"}
                clickFunction={getPercent} />
        )
    })
 
    useEffect(() => {
        setTipAmmount(Number((bill / 100 * tipPercent / numberOfPeple).toFixed(2)))
        setTotal(Number(((bill + tipAmmount) / numberOfPeple).toFixed(2)))
    }, [bill, numberOfPeple, tipPercent, tipAmmount])

    function resetApp(){
        setTotal(0)
        setTipAmmount(0)
        setTipPercent(0)
        setBill('')
        setNumberOfPeople(1)
    }

    return (
        <div className="calc--body">
            <div className="calc--settings">
                <Input  label={"Bill"} 
                        value={bill} 
                        changeFunc={(input) => setBill(Number(input.target.value))}/>

                <h4 className="label">Select tip %</h4>
                <div className="buttons">
                    {buttonsEl}
                    {isCustom ? <Custom /> : <Buttons number={"Custom"} clickFunction={() => setIsCustom(true)}/>}
                </div>
                <Input  label={'Number ofPeople'} 
                        errorLabel={"Cant't be zero"} 
                        value={numberOfPeple}
                        changeFunc={(input) => setNumberOfPeople(Number(input.target.value))}/>
            </div>
            <div className="calc--results">
                <Result description={'Tip Ammout'} result={tipAmmount}/>
                <Result description={'Total'} result={total}/>
                <Reset resetFunc={resetApp}/>
                
            </div>
        </div>
    )
}

export default Calc