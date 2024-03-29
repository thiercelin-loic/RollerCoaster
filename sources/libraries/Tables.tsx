import React, { useState } from "react"
import capitalize from "capitalize"

import Field from "./Field"

import add from "./handlers/add"
import progress from "./handlers/progress"
import change from "./handlers/change"

import key from "./utilities/key"

import { X, Y, CAPTION } from "./constants/tables"

import axis from "./types/axis"

import icon from "./icons/add.png"

import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [x, setX] = useState(X)
    const [y, setY] = useState(Y)

    const [caption, setCaption]
        = useState(CAPTION)

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
                        onChange={(event) =>
                            change(event, setY)
                        }
                    />
                </td>
                <button
                    className="add"
                    onClick={() => {
                        add(axes, x, y, setAxes)
                        progress(x, setX, setY)
                    }}
                >
                    <img src={icon} />
                </button>
            </tr>
        </tbody>
    </table>
}

export default Tables