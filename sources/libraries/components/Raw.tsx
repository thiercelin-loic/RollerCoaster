import React, { useState } from "react"
import Input from "./Input"

const Raw = ({ axe }) => {
    const [x, setX] = useState(axe.x)
    const [y, setY] = useState(axe.y)

    addEventListener("keypress", (event) => {
        if (event.key == "Enter")
            console.log(x, y)
    })

    return <tr>
        <th scope="raw">
            <Input value={x} setValue={setX} />
        </th>
        <th scope="raw">
            <Input value={y} setValue={setY} />
        </th>
    </tr>
}

export default Raw