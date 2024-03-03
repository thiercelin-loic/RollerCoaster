import { useState } from "react"

const useWidth = () => {
    const [width, setwidth]
        = useState(5)

    const whell = event =>
        event.deltaY == 100
            ? setwidth(width - 1)
            : setwidth(width + 1)

    addEventListener("wheel", whell)
    
    return width
}

export default useWidth