import React, { useState } from "react"

import Button from "./components/Button"

import key from "./utilities/key"

import { tools as initial } from "./constants/tools"

import "./styles/Tool.css"

const tools = ["1"]

const Tools = ({ focus }) => {
    const [width, setWidth]
        = useState(initial.width)

    const resize = () =>
        width == initial.width
            ? setWidth("27%")
            : setWidth(initial.width)

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