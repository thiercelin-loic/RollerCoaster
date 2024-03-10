import React from "react"
import { useState } from "react"

const Button = (
    { tool, width, focus }
) => {
    const [color, setColor]
        = useState("lightgrey")

    const [borderColor, setBorderColor]
        = useState("#80808080")

    const style
        = { color, borderColor }

    const colorize = () => {
        if (width == "2.75%") {
            setColor("orange")
            setBorderColor("orange")
        } else {
            setColor("lightgrey")
            setBorderColor("#80808080")
        }
    }

    const onClick = () => {
        colorize()
        focus()
    }

    return <p
        className="tools"
        style={style}
        onClick={onClick}>{
            tool
        }</p>
}

export default Button