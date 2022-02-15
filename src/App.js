import React from "react";

import Credits from "./js/components/Credits";

import Calc from "./js/components/Calc";
import Logo from "./images/logo.svg";

function App() {
    return (
        <>
            <img src={Logo} className="logo" alt="logo image" />
            <Calc />
            <Credits />
        </>
    )
}


export default App