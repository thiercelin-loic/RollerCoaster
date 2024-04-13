import React from "react"
import viewBox from "./viewBox"

const d = "M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"

const Add = () =>
    <svg viewBox={viewBox} width="24">
        <path d={d} />
    </svg>

export default Add