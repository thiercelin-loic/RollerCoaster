import React from "react"

import Bar from "./Bar"

import "./styles/Diagram.css"

const Diagram = ({style, axes}) => {
    return <div className="tab" style={style}>
        <Bar axes={axes} />
    </div>
}

export default Diagram