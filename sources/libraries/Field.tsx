import React, { useState } from "react"

import update from "./handlers/update"
import remove from "./handlers/remove"

import event from "./types/event"

import icon from "./icons/remove.png"

import "./styles/field.css"

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
            <img className="add" src={icon} />
        </button>
    </tr >
}

export default Field