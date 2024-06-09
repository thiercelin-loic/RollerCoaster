import React, { useState } from "react"

import Field from "./Field"
import Keyboard from "./Keyboard"

import add from "./handlers/add"
import progress from "./handlers/progress"
import key from "./utilities/key"

import { tables as initial } from "./constants/tables"

import axis from "./types/axis"

import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [x, setX]
        = useState(initial.x)

    const [y, setY]
        = useState(initial.y)
    
    addEventListener("keydown", (event) => {
        const key = event.key;

        setTimeout(() => {
            if (key == "Enter") {
                add(axes, x, y, setAxes)
                progress(x, setX, setY)
            }
        })
    })

    return <div className="tables" style={{ display }}>{
            axes.map((axis: axis) => <Field
                key={key()}
                axes={axes}
                setAxes={setAxes}
                axis={axis}
            />)
        }
        <input
            className="value"
            type="text"
            value={y.toString()}
            onChange={(event) => {
                const value = event.target.value
                const integer = parseInt(value)
                setY(integer)
            }}
        />
        <p className="instruction">Press "Enter" to insert a value, and "Delete" to remove it.</p>
        <p className="instruction">For changing an existing value, click overhere.</p>
        <Keyboard
            display={display}
            set={setY}
        />
    </div>
}

export default Tables