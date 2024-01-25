import React from "react"
import bars from "./types/bars"
import "./styles/Bars.css"

const Bars = ({
    positions,
    enlargement,
    display
}: bars) => <div className="bars">{
    positions.map(position => {
        const className = "bar"
        const key = position.y
        const height = `${position.y}px`
        const marginLeft = `${position.x * enlargement}px`

        const y = { marginLeft, height }
        const value = { height, display }
        const tag = { marginLeft, display }
        const styles = { y, value, tag }

        const X = () => <div className={className} />

        const Y = () => <div
            className={className}
            style={styles.y}
        />

        const Value = () => <p
            className={className}
            style={styles.value}
        >
            {position.y}
        </p>

        const Key = () => <p
            className={className}
            style={styles.tag}
            id="key"
        >
            {position.x}
        </p>

        return <div key={key}>
            <Y />
            <Value />
            <X />
            <Key />
        </div>
    })
}</div>

export default Bars