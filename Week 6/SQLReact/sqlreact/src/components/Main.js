import React, {useState, useEffect} from 'react'
import axios from 'axios'
import AvengersTable from './AvengerTable.js'


function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default function Main(){

    const [tableState, setTableState] = useState('')

    useEffect(() => {
        async function getTableData() {
            await axios.get(`/avengers/get`)
                .then(res => {
                    setTableState(res.data)
                })
        } getTableData()
    }, [])

    return (
        <div className="Main">
            <AvengersTable tableState={tableState}/>
        </div>
    )
}