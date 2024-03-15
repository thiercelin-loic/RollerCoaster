import React, { useState } from "react"

import Head from "./components/Head"
import Raw from "./components/Raw"

import key from "./utilities/key"

import event from "./types/event"
import axe from "./types/axe"

import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [caption, setCaption]
        = useState("Table A")

    const [x, setX]
        = useState(0)

    const [y, setY]
        = useState(0)

    const changeCaption = (event: event) =>
        setCaption(event.target.value)

    const changeX = (event: event) => {
        const value = event.target.value
        const integer = parseInt(value)
        setX(integer)
    }

    const changeY = (event: event) => {
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

    const Axes = () => axes.map((axe: axe) =>
        <Raw key={key()} axe={axe} />
    )

    addEventListener("keypress", (event) => {
        if (event.key == "Enter") add()
    })

    return <table style={{ display }}>
        <caption>
            <input
                className="title"
                type="text"
                value={caption}
                onChange={changeCaption}
            />
        </caption>
        <Head />
        <tbody>
            <Axes />
            <tr>
                <td scope="raw">
                    <input
                        type="text"
                        value={`${x}`}
                        onChange={changeX}
                    />
                </td>
                <td scope="raw">
                    <input
                        type="text"
                        value={`${y}`}
                        onChange={changeY}
                    />
                </td>
            </tr>
        </tbody>
    </table>
}

export default Tables