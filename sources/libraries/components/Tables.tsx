import React from "react"
import Caption from "./Caption"
import Head from "./Head"
import Raw from "./Raw"

const Tables = ({ display, axes }) => {
    const Table = () =>
        axes.map(axe => <Raw axe={axe} />)

    const Body = () =>
        <tbody><Table /></tbody>

    return <table style={{ display }}>
        <Caption />
        <Head />
        <Body />
    </table>
}

export default Tables