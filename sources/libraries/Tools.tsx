import React from "react"

import Button from "./components/Button"

import key from "./utilities/key"

import "./styles/Tool.css"

const tools = ["edit"]

const Tools = ({ focus }) => 
    <div className="tools">{
        tools.map(tool => <Button
            key={key()}
            tool={tool}
            focus={focus}
        />)
}</div>

export default Tools