import React from "react"
import "./styles/Tools.css"

const Tools = ({
    enlargement,
    setEnlargement,
    display,
    setDisplay
}) => {
    const enlarge = () => setEnlargement(
        enlargement + 1
    )

    const reduce = () => setEnlargement(
        enlargement - 1
    )

    const show = () => display == "none"
        ? setDisplay("content")
        : setDisplay("none")

    return <div className="tools">
        <p className="enlarge" onClick={enlarge}>+</p>
        <p className="reduce" onClick={reduce}>-</p>
        <p className="values" onClick={show}>1</p>
    </div>
}

export default Tools