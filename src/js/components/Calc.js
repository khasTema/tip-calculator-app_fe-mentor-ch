import React, {useState, useRef, useEffect} from "react";

import Reset from "./Reset";
import Result from "./Result";
import Input from "./Input";
import Buttons from "./Buttons";
import Custom from "./Custom";

import DollarImg from "../../images/icon-dollar.svg";
import PersonImg from "../../images/icon-person.svg";

function Calc(){

    const [bill, setBill] = useState('')
    const [numberOfPeple, setNumberOfPeople] = useState(1)
    const [isCustom, setIsCustom] = useState(false)
    const [tipAmmount, setTipAmmount] = useState(0)
    const [total, setTotal] = useState(0)
    const [tipPercent, setTipPercent] = useState(0)

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
        setTipAmmount((bill / 100 * tipPercent / numberOfPeple).toFixed(2))
        setTotal(((bill + Number(tipAmmount)) / numberOfPeple).toFixed(2))
    }, [bill, numberOfPeple, tipPercent, tipAmmount])

    function resetApp(){
        setTotal(0)
        setTipAmmount(0)
        setTipPercent(0)
        setBill('')
        setNumberOfPeople(1)
        setIsCustom(false)
    }

    return (
        <div className="calc--body">
            <div className="calc--settings">
                <Input  label={"Bill"} 
                        img={DollarImg}
                        value={bill} 
                        changeFunc={(input) => setBill(Number(input.target.value))}/>

                <h4 className="label">Select tip %</h4>
                <div className="buttons">
                    {buttonsEl}
                    {isCustom ? 
                        <Custom changeFunc={(input) => setTipPercent(Number(input.target.value))} passValue={tipPercent}/> 
                        : 
                        <Buttons number={"Custom"} clickFunction={() => setIsCustom(prev => !prev)}/>}
                </div>
                <Input  label={'Number ofPeople'} 
                        img={PersonImg}
                        errorLabel={numberOfPeple === 0 && "Cant't be zero"} 
                        value={numberOfPeple}
                        changeFunc={(input) => setNumberOfPeople(Number(input.target.value))}/>
            </div>
            <div className="calc--results">
                <Result description={'Tip Ammout'} 
                        result={numberOfPeple === 0 ? 0 : tipAmmount}/>
                <Result description={'Total'} 
                        result={numberOfPeple === 0 ? 0 : total}/>
                <Reset resetFunc={resetApp}/>
                
            </div>
        </div>
    )
}

export default Calc