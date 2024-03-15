import React from "react"

import Bar from "./Bar"

import "./styles/Diagram.css"

const Diagram = ({axes}) => {
    return <div>
        <div className="axis" id="x" />
        <div className="axis" id="y" />
        <Bar axes={axes} />
    </div>
}

export default Diagram