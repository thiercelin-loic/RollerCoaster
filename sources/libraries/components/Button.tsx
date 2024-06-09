import React from "react"
import { useState } from "react"
import capitalize from "capitalize"

const Button = (
    { tool, focus }
) => {
    const [color, setColor]
        = useState("lightgrey")

    const [borderColor, setBorderColor]
        = useState("#80808080")

    const style
        = { color, borderColor }

    const colorize = () => {
        if (color == 'lightgrey') {
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
            capitalize(tool)
        }</p>
}

export default Button