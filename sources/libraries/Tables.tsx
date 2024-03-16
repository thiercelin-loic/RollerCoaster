import React, { useState } from "react"

import Raw from "./components/Raw"

import key from "./utilities/key"

import event from "./types/event"
import axe from "./types/axe"

import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [x, setX]
        = useState(0)

    const [y, setY]
        = useState(0)

    const change = (event: event) => {
        const value = event.target.value
        const integer = parseInt(value)
        setY(integer)
    }

    const add = () => {
        const copy = [...axes]
        const push = { x, y }

        copy.push(push)
        setAxes(copy)

        setX(x + 1)
        setY(0)
    }

    const remove = (value: number) => {
        const copy = [...axes]
        const updated = copy.filter((axe) =>
            axe.y !== value
        )

        setAxes(updated)
    }


    const Axes = () =>
        axes.map((axe: axe) =>
            <Raw
                key={key()}
                axe={axe}
                remove={remove}
            />
        )

    addEventListener("keypress", (event) => {
        if (event.key == "Enter") add()
    })

    return <table style={{ display }}>
        <tbody>
            <Axes />
            <tr>
                <td>
                    <input
                        type="text"
                        value={`${y}`}
                        onChange={change}
                    />
                </td>
            </tr>
        </tbody>
    </table>
}

export default Tables