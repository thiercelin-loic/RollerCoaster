import React, { useState } from "react"

import Button from "./components/Button"
import key from "./utilities/key"

import "./styles/Tool.css"

const tools = ["+"]

const Tools = ({ focus }) => {
    const [width, setWidth]
        = useState("2.75%")

    const resize = () =>
        width == "2.75%"
            ? setWidth("27%")
            : setWidth("2.75%")

    return <div className="tools" style={{ width }}>{
        tools.map(tool => <Button
            key={key()}
            tool={tool}
            width={width}
            focus={() => {
                focus()
                resize()
            }}
        />)
    }
    </div>
}

export default Tools