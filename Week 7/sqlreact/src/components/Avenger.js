import React from 'react'

export default function Avenger(props){
  console.log(props)
  return (
    <div className="issue">
        <table>
            <tr>
                <a href={props.url}>Click Me</a>
                <td>{props.name}</td>
                <td>{props.appearances}</td>
                <td>{props.gender}</td>
            </tr>
        </table>
    </div>
  )
}