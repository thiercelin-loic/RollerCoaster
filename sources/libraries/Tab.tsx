import React from "react"
import tab from "./types/tab"
import "./styles/Tab.css"

const Tab = ({ width, height, marginTop }: tab) => {
    const style = { width, height, marginTop }

    return <div
        className="tab"
        id="tab"
        style={style}
    />
}

export default Tab