import React, { useState } from "react"
import capitalize from "capitalize"

import Field from "./Field"

import add from "./handlers/add"
import key from "./utilities/key"

import { tables as initial } from "./constants/tables"

import axis from "./types/axis"
import Add from "./icons/Add"

import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [x, setX]
        = useState(initial.x)

    const [y, setY]
        = useState(initial.y)

    const [caption, setCaption]
        = useState(initial.caption)

    return <table style={{ display }}>
        <caption>
            {capitalize(caption)}
        </caption>
        <tbody>{
            axes.map((axis: axis) => <Field
                key={key()}
                axes={axes}
                setAxes={setAxes}
                axis={axis}
            />)
        }
            <tr>
                <td>
                    <input
                        className="add"
                        type="text"
                        value={`${y}`}
                        onChange={(event) => {
                            const value = event.target.value
                            const integer = parseInt(value)
                            setY(integer)
                        }}
                    />
                </td>
                <button
                    className="add"
                    onClick={() => {
                        add(axes, x, y, setAxes)
                        progress(x, setX, setY)
                    }}
                >
                    <Add />
                </button>
            </tr>
        </tbody>
    </table>
}

export default Tables