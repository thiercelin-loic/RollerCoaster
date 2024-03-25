import React, { useState } from "react"

import update from "./handlers/update"
import remove from "./handlers/remove"

import event from "./types/event"

const Field = ({
    axes,
    setAxes,
    axis
}) => {
    const [value, setValue] = useState(axis.y)

    const change = (event: event) => {
        const value = event.target.value
        const integer = parseInt(value)

        update(axes, axis.x, integer, setAxes)
        setValue(integer)
    }

    return <tr>
        <th scope="raw">
            <input
                className="value"
                type="text"
                value={value}
                onChange={change}
            />
        </th>
        <button
            className="remove"
            onClick={() =>
                remove(axes, setAxes, axis.x)
            }
        >
            remove
        </button>
    </tr >
}

export default Field