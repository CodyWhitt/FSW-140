import React from 'react'
import Avenger from './Avenger'

export default function tableData(tableData){
    let data = (tableData.tableState)
    console.log(data)
    if (data != '')
        return (
            <div className="issue-list">
            <table>
                <tr>
                    <th>URL</th>
                    <th>Name</th>
                    <th>Appearances</th>
                    <th>Gender</th>
                </tr>
            </table>
                { data.map(avenger => <Avenger {...avenger} key={avenger.url}/>) } 
            </div>
        )
         
}