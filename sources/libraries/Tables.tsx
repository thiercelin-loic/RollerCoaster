import React, { useState } from "react"
import Head from "./components/Head"
import Raw from "./components/Raw"
import axe from "./types/axe"
import "./styles/Tables.css"

const Tables = ({ display, axes, setAxes }) => {
    const [caption, setCaption]
        = useState("Table A")

    const [x, setX] = useState("")
    const [y, setY] = useState("")

    const add = () => {
        const copy = [...axes]
        const push = { x, y }

        copy.push(push)
        setAxes(copy)

        setX("")
        setY("")
    }

    addEventListener("keypress", (event) => {
        if (event.key == "Enter")
            add()
    })

    return <table style={{ display }}>
        <caption>
            <input
                className="title"
                type="text"
                value={caption}
                onChange={(event) =>
                    setCaption(event.target.value)
                }
            />
        </caption>
        <Head />
        <tbody>{
            axes.map((axe: axe) =>
                <Raw axe={axe} />
            )
        }
            <th scope="raw">
                <input
                    type="text"
                    value={`${x}`}
                    onChange={(event) =>
                        setX(event.target.value)
                    }
                />
            </th>
            <th scope="raw">
                <input
                    type="text"
                    value={`${y}`}
                    onChange={(event) =>
                        setY(event.target.value)
                    }
                />
            </th>
        </tbody>
    </table>
}

export default Tables