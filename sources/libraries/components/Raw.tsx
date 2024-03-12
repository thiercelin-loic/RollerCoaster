import React from "react"

const Raw = ({ axe }) => {
    return <tr>
        <th scope="raw">{
            axe.x
        }</th>
        <th scope="raw">{
            axe.y
        }</th>
    </tr >
}

export default Raw