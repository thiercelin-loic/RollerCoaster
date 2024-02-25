import React, { useState } from "react"
import Button from "./components/Button"
import "./styles/Tool.css"

const Tool = ({ focus }) => {
    const [width, setWidth] = useState("2.75%")

    return <div className="tool" style={{ width }}>
        <Button
            width={width}
            setWidth={setWidth}
            focus={focus}
            value="+"
        />
        <Button
            width={width}
            setWidth={setWidth}
            focus={focus}
            value="𝑓"
        />
    </div>
}

export default Tool