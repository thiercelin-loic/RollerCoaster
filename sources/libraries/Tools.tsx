import React, { useState } from "react"

import Button from "./components/Button"

import key from "./utilities/key"

import { WIDTH } from "./constants/tools"

import "./styles/Tool.css"

const tools = ["ƒ"]

const Tools = ({ focus }) => {
    const [width, setWidth]
        = useState(WIDTH)

    const resize = () =>
        width == WIDTH
            ? setWidth("27%")
            : setWidth(WIDTH)

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