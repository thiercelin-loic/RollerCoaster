import { useState } from "react"

const useAxes = (values: number[]) => {
    const [axes, setAxes]
        = useState([{ x: 0, y: 0 }])

    const [index, setIndex]
        = useState(0)

    const copy = [...axes]

    const pushing = {
        x: index,
        y: values[index]
    }

    const load = () => {
        if (index < values.length) {
            copy.push(pushing)
            setAxes(copy)
            setIndex(index + 1)
        }
    }
     
    setTimeout(() => load)
    return axes
}

export default useAxes