import React, { useState } from "react"
import Button from "./components/Button"
import Tables from "./components/Tables"
import "./styles/Tool.css"
import "./styles/Tables.css"

const tools = ["+"]

const Tools = ({ focus, axes }) => {
    const [width, setWidth]
        = useState("2.75%")

    const resize = () =>
        width == "2.75%"
            ? setWidth("25%")
            : setWidth("2.75%")

    const display = width == "2.75%"
        ? "none"
        : "table"

    return <div className="tools" style={{ width }}>{
        tools.map(tool => <Button
            tool={tool}
            width={width}
            focus={() => {
                focus()
                resize()
            }}
        />)
    }
        <Tables
            display={display}
            axes={axes}
        />
    </div>
}

export default Tools