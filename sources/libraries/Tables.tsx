import React, { useState } from "react"
import capitalize from "capitalize"

import Field from "./Field"

import insert from "./handlers/insert"
import progress from "./handlers/progress"
import change from "./handlers/change"

import key from "./utilities/key"

import { X, Y, CAPTION } from "./constants/tables"

import axis from "./types/axis"

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
                        className="insert"
                        type="text"
                        value={`${y}`}
                        onChange={(event) =>
                            change(event, setY)
                        }
                    />
                </td>
                <button
                    className="insert"
                    onClick={() => {
                        insert(axes, x, y, setAxes)
                        progress(x, setX, setY)
                    }}
                >
                    insert
                </button>
            </tr>
        </tbody>
    </table>
}

export default Tables