import React, { useState } from "react"

import Remove from "./icons/Remove"

import update from "./handlers/update"
import remove from "./handlers/remove"

import event from "./types/event"

import "./styles/Field.css"

const Field = ({
    axes,
    setAxes,
    axis
}) => {
    const [value, setValue] = useState(axis.y)

    return <tr>
        <th scope="raw">
            <input
                className="value"
                type="text"
                value={value}
                onChange={(event: event) => {
                    const value = event.target.value
                    setValue(value)
                    update(
                        axes,
                        axis.x,
                        parseInt(value),
                        setAxes
                    )
                }}
            />
        </th>
        <button
            className="remove"
            onClick={() =>
                remove(axes, setAxes, axis.x)
            }
        >
            <Remove/>
        </button>
    </tr >
}

export default Field