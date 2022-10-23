import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

import Main from './Main'

export default function Welcome(){

    let navigate = useNavigate()

    function goAway() {
        navigate("../main")
    }

    return (
        <div id='welcome'>
            <h1>Avenger's data table</h1>
            <div>
                <p>This is just a simple application build to demonstrate the ability to make a multi page application to display data from a SQL based server. No other commands are used in this other then a get all call for simplicity sake.</p>
                <button onClick={goAway}> I wanna see the table!!</button>
            </div>
            
        </div>
    )
}