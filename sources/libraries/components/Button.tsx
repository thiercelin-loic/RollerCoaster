import React from "react"
import { useState } from "react"

const Button = ({ width, setWidth, focus, value }) => {
    const [color, setColor]
        = useState("lightgrey")

    const [borderColor, setBorderColor]
        = useState("#80808080")

    const style
        = { color, borderColor }

    const resize = () => {
        if (width == "2.75%") {
            setWidth("25%")
            setColor("orange")
            setBorderColor("orange")
        } else {
            setWidth("2.75%")
            setColor("lightgrey")
            setBorderColor("#80808080")
        }
    }

    const onClick = () => {
        focus()
        resize()
    }

    return <p className="tool" style={style} onClick={onClick}>{
        value
    }</p>
}

export default Button